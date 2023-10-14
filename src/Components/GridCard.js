import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useProductContext } from '../ProductChosen'; // Import the context hook
import { useNavigate } from 'react-router';
import { useSavedProducts } from '../SavedContext';
import { auth } from '../firebase';

function GridCard({product}) {
  const navigate = useNavigate()
  const { setChosenProduct } = useProductContext(); // Access context
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
    <div className='GridCard cursor-pointer col-span-3 flex flex-col bg-white py-4 border border-gray-300 rounded-md gap-2 '>
      <div className='ProductImg flex items-center justify-center border-b border-b-gray-300'
        onClick={() => handelChosenProduct()}>
        <img src={product.img1} alt="image1" className=' max-h-36 w-fit p-2'/>
      </div>
      <div className='ProductInfo flex flex-col px-4 mt-2'>
        <div className='ProductPrice flex justify-between items-center'>
          <div className='flex flex-col gap-1'>
            <span className='font-semibold  text-black mr-2'>${product.price}.00 {product.discount ? <span className='font-semibold  text-gray-400 line-through	'>$1128.00</span> : ''}</span>
          <label className="flex items-center space-x-2 ">
          <span className={` select-none cursor-pointer`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`${index < product.rating ? 'text-orange-400' : 'text-gray-300'}`}
              />
            ))}
            <span className='text-orange-400 font-medium ml-2'>{product.rating?product.rating:'0.0'}</span>
          </span>
          </label>
          </div>
          <div 
            className='transition-all duration-300 border border-gray-200  py-1 px-2 rounded cursor-pointer wish text-gray-500 hover:text-blue-600  '
            onClick={()=>handleSaveClick()}
            >
            <FontAwesomeIcon icon={faHeart} className={`${isSaved ? 'text-blue-600':'' }`} />
          </div>
        </div>
        <span className='font-medium text-gray-600 mt-2 hover:text-blue-600'
          onClick={() => handelChosenProduct()}>
          {product.name}
        </span>
      </div>
    </div>
  )
}

export default GridCard


