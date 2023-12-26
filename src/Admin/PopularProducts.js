import {  faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PopularProducts(props) {
  return (
  <div className={`bg-white rounded-lg fle px-4 lg:px-8 py-4  gap-4 col-span-${props.cols}  flex-col  lg:w-auto w-full h-full  mb-6 lg:mb-0 shadow `}>
    <div className='mb-2 relative'>
      <h4 className='-mb-0.5  font-semibold'>Popular Products</h4>
      <span className=' text-xs text-gray-500 font-medium'>Total 10.4k Visitors</span>
      <span className=' absolute right-0 top-0 text-gray-500'>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </span>
      </div>
      <div className='Products'>
        {
          props.Products.map((Product) => (
            <div className='mb-4 relative' key={Product.id}>
              <h4 className='-mb-0.5  font-semibold '>{Product.label}</h4>
              <span className=' text-xs text-gray-400'>
              Item: {Product.id}
              </span>
              <span className=' absolute right-0 top-2 font-medium '>
                ${Product.cost}
              </span>
            </div>
          ))
        }
      </div>
  </div>
  )
}

export default PopularProducts