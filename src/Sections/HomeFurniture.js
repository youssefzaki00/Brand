import React from 'react'
import HomeFurnitureImg from '../imgs/interior.jpg';
import './HomeFurniture.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useProducts } from '../ProductsContext';
import { useNavigate } from 'react-router';
import Loading from '../Components/Loading';
function HomeFurniture() {
  const products = useProducts();
    const filteredProducts = products.filter(product => product.category === "Home furniture");
    const navigate = useNavigate()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    const handelChosenProduct = (id, name, category) => {
    navigate(`/AllCategory/${category}/${name}/${id}`);
    scrollToTop()
    }
  if (!products) {
    return <Loading />;
  }
  return (
    <div className='container mx-auto  xl:px-14 mt-4  HomeFurniture'>
      <div className='shadow-sm rounded bg-white flex flex-col xl:flex-row justify-between relative'>
        <div className='HomeFurnitureImg hidden xl:block relative'>
          <div className='more '>
            <p className=' text-black text-opacity-80 font-bold text-lg pt-1 mb-4'>HomeFurniture and<br></br> clothes</p>
            <button className=' font-medium bg-white p-2 rounded-md text-black'>Source now</button>
          </div>
          <img src={HomeFurnitureImg} alt='' className='h-full  w-80  hidden xl:block' />
        </div>
        <div className='xl:grid flex overflow-x-auto grid-cols-4  '>
          {filteredProducts.slice(0,8).map(product => (
            <div key={product.id} className='cursor-pointer'
            onClick={() => handelChosenProduct(product.id, product.name, product.category)}
            >
              <div className='product flex items-center flex-col-reverse xl:flex-row py-6 px-2'>
                <div className='flex flex-col jewelery-details xl:p-2 pt-8 text-center xl:text-start'>
                  <h3 className='w-36'>{product.name.slice(0, 12)}...</h3>
                  <span className='text-zinc-400 flex flex-row xl:flex-col items-center justify-center'>
                    <span className='xl:mr-2'>From</span>
                    <span>USD {product.price}$</span>
                  </span>
                </div>
                <div className='product-image'>
                  <img src={product.img1} alt='' className='h-20 w-28' />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className='p-2.5 pl-6 text-blue-600 border-t border-gray-200 flex xl:hidden items-center justify-start'>Source now
          <FontAwesomeIcon icon={faArrowRight} className='ml-2'/>
        </button>
      </div>
    </div>
  );
}

export default HomeFurniture