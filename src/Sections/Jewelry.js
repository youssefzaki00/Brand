import React, { useEffect, useState } from 'react'
import jewelryImg from '../imgs/types_of_gold_jewelry.webp';
import './jewelry.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Jewelry() {
  const options = {
  url: 'https://fakestoreapi.com/products',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
  };
  const [products,setProducts ] = useState([]);
  useEffect(() => {
    axios(options)
      .then(response => {
    setProducts(response.data);
  });
  }, []);
  return (
    <div className='container mx-auto  xl:px-16 mt-4  jewelry'>
      <div className='  bg-white flex flex-col xl:flex-row justify-between relative'>
        <div className='jewelryImg hidden xl:block relative'>
          <div className='more '>
            <p className=' text-black text-opacity-80 font-bold text-lg pt-1 mb-4'>Jewelry and<br></br> clothes for women</p>
            <button className=' font-medium bg-white px-1 lg:px-2 py-1 rounded-md text-black'>Source now</button>
          </div>
          <img src={jewelryImg} alt='' className='h-full  w-80  hidden xl:block' />
        </div>
        <div className='xl:grid flex overflow-x-auto grid-cols-4  '>
          {
            products.map((product) => {
            if (product.category === "jewelery" ) {
              return (
                <>
                <div key={product.id + 2} className=' product flex items-center flex-col-reverse xl:flex-row py-6 px-2 '>
                <div className='flex flex-col jewelery-details xl:p-2 pt-8 text-center xl:text-start '>
                <h3 className=' w-36'>{product.title.slice(0,12)}...</h3>
                      <span className=' text-zinc-400 flex flex-row xl:flex-col items-center justify-center'>
                        <span className='xl:mr-2'>
                      From
                      </span>
                        <span>
                        USD {product.price}$
                        </span>
                    </span>
                    </div>
                    <div className='product-image'>
                  <img src={product.image} alt='' className='h-12 w-16'/>
                  </div>
                  </div>
                <div key={product.id + 4} className='product flex items-center py-6 px-2 flex-col-reverse xl:flex-row justify-between'>
                      <div className='flex flex-col jewelery-details xl:p-2 pt-8 text-center xl:text-start '>
                <h3 className=' w-36'>{product.title.slice(0,12)}...</h3>
                      <span className=' text-zinc-400 flex flex-row xl:flex-col items-center justify-center'>
                        <span className='mr-2'>
                      From
                      </span>
                        <span>
                        USD {product.price}$
                        </span>
                    </span>
                    </div>
                  <div className='product-image '>
                  <img src={product.image} alt='' className='h-12 w-16'/>
                  </div>
                </div>
                  </>
              );
            }
          })
          }
        </div>
        <button className='p-2.5 pl-6 text-blue-600 border-t border-gray-200 flex xl:hidden items-center justify-start'>Source now
          <FontAwesomeIcon icon={faArrowRight} className='ml-2'/>
        </button>
      </div>
    </div>
  );
}

export default Jewelry