import React, { useEffect, useState } from 'react'
import techImg from '../imgs/image 98.png';
import './Elctronics.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Electronics() {
 const electronics = {
  url: 'https://fakestoreapi.com/products',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
  };
  const current =  Date.now();

  const [techs,setTechs ] = useState([]);
  useEffect(() => {
    axios(electronics)
      .then(response => {
    setTechs(response.data);
  });
    return () => {
      console.log(techs)
    };
  }, []);
  return (
    <div className='container mx-auto  xl:px-16 mt-4  electronics'>
      <div className='  bg-white flex  flex-col xl:flex-row  border border-solid rounded border-zinc-300 justify-between'>
        <div className='relative techImg hidden xl:block'>
          <div className='more '>
            <p className=' text-black text-opacity-80 font-bold text-lg pt-1 mb-4'>Consumer<br></br> electronics and <br></br> gadgets</p>
            <button className='  font-medium bg-white px-1 lg:px-2 py-1 rounded-md text-black'>Source now</button>
          </div>
          <img src={techImg} alt='' className=' w-72 h-full' />
        </div>
        <div className='xl:grid flex overflow-x-auto grid-cols-3'>
          {
            techs.map((product) => {
              if (product.category === "electronics") {
              return (
                <>
                <div key={product.id} className='product-tech   flex  flex-col-reverse xl:flex-row items-center py-6 px-8'>
                <div className='flex flex-col electronics-details xl:p-2 pt-8 text-center xl:text-start'>
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
                    <div className='product-tech-image'>
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

export default Electronics;