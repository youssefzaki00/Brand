import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { useProductContext } from '../ProductChosen';
import { Link, useParams } from 'react-router-dom';

function Tags() {
  // const { chosenProduct,setChosenProduct } = useProductContext();
  const { category, name } = useParams();

  return (
    <div className='tags flex text-gray-500 gap-2 items-center mb-4'>
      <Link to='/' className='hover:text-blue-600'>Home</Link>
      <FontAwesomeIcon icon={faAngleRight} className=' text-xs' />
      <Link to='/AllCategory/AllProducts' className='hover:text-blue-600'>All Products</Link>
      {category&&
        <>
          <FontAwesomeIcon icon={faAngleRight} className=' text-xs' />
          <span>{category}</span>
          <FontAwesomeIcon icon={faAngleRight} className=' text-xs' />
          <span>{name}</span>
        </>
      }
    </div>
  )
}

export default Tags;
