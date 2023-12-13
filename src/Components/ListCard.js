import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useProductContext } from '../ProductChosen'; // Import the context hook
import { useNavigate } from 'react-router';
import { useSavedProducts } from '../SavedContext';
import { auth } from '../firebase';

function ListCard({product}) {
  const navigate = useNavigate()
  const {  setChosenProduct } = useProductContext();
  const category=product.category.split('').filter((category)=>category!==' ').join('')
  const name=product.name.split('').filter((name)=>name!==' ').join('')
  const id=product.id.split('').filter((id)=>id!==' ').join('')
  const handelChosenProduct = () => {
    setChosenProduct(product);
    navigate(`/AllCategory/${category}/${name}/${id}`);
    scrollToTop()
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const { savedProducts, addProduct, removeProduct } = useSavedProducts();
  const isSaved = product && savedProducts.includes(product.id);
const handleSaveClick = () => {
    if (!isSaved) {
      if (!auth.currentUser) {
        toast.error('Please log in to save the product');
        navigate('/login'); // Navigate to the login page
        return;
      }

      addProduct(id);
      toast.success('Product Saved successfully');
    } else {
      removeProduct(id);
      toast.error('Product Removed successfully');
    }
  };
  return (
    <div className='ListCard grid grid-cols-9 col-span-9 bg-white py-2 pe-4 border border-gray-300 rounded-md gap-2  mb-4'>
      <div className='ProductImg cursor-pointer col-span-2 h-full flex items-center justify-center'
        onClick={() => handelChosenProduct()}>
        <img src={product.img1} alt="image1" className=' max-h-36 w-fit'/>
      </div>
      <div className='ProductInfo flex flex-col col-span-7 pe-2 py-4'>
        <div className='flex justify-between items-center '>
          <span className='font-medium cursor-pointer text-gray-600  hover:text-blue-600'
            onClick={() => handelChosenProduct()}>
            {product.name}
          </span>
          <div 
            className='transition-all duration-300 border border-gray-200  py-1 px-2 rounded text-gray-500 hover:text-blue-600 cursor-pointer '
            onClick={()=>handleSaveClick()}
            >
            <FontAwesomeIcon icon={faHeart} className={`${isSaved ? 'text-blue-600':'' }`} />
          </div>
        </div>
        <div className='ProductPrice mt-4'>
          <span className='font-semibold text-lg text-black mr-2'>${product.price}.00</span>
          {product.discount ?<span className='font-semibold  text-gray-400 line-through	'>$1128.00</span> :''}
        </div>
        <div className='flex items-center'>
          <label className="flex items-center space-x-2 ">
          <span className={` select-none cursor-pointer`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`${index < product.rating ? 'text-orange-400' : 'text-gray-300'}`}
              />
            ))}
            
          </span>
          </label>
          <span className='text-orange-400 font-medium ml-2'>{product.rating?product.rating:'0.0'}</span>
          <span className='w-2 h-2 rounded-full bg-gray-200 ml-3'></span>
          <span className='text-gray-400 ml-2'>{product.orders?product.orders:'0'} Orders</span>
          <span className='w-2 h-2 rounded-full bg-gray-200 ml-3'></span>
          {product.freeShipping ?
            <span className=' text-green-500 ml-2 '>Free Shipping</span>
            :
            <span className=' text-red-500 ml-2 '>Paid Shipping</span>}
          
        </div>
        <div className='text-gray-500 mt-4'>
          {product.description.slice(0,70)}...
        </div>
        <div className='text-blue-600 font-medium mt-2 cursor-pointer'
          onClick={() => handelChosenProduct()}>View details</div>
      </div>
    </div>
  )
}

export default ListCard