import React from 'react'
import './OfferSection.css'
import lap from'../imgs/lap.png'
import head from'../imgs/image 29.png'
import watch from'../imgs/image 35.png'
import phone from'../imgs/image 23.png'
import cam from'../imgs/image 28.png'

function OfferSection() {
  return (
    <div className='offerSection container mx-auto xl:px-16 rounded'>
      <div className='rounded bg-white lg:grid  lg:grid-cols-7 px-2 '>
        <div className='offer flex lg:block justify-between items-baseline lg:items-center mb-4 lg:mb-0 w-full lg:col-span-2 px-3 pt-2'>
          <div className=' flex flex-col'>
          <h3 className='text-lg lg:text-2xl font-bold'>Deals and offers</h3>
          <p className=' text-zinc-400'>Hygiene equipments</p>
          </div>
          <div className="counter mt-6 flex w-3/6 lg:w-5/6 gap-4 mr-2 lg:mr-0 mb-4">
            <div className="unit md:text-white text-gray-400 bg-gray-200 md:bg-neutral-600 py-1 md:py-2 md:rounded flex flex-col justify-center items-center w-12 md:w-16">
              <span className="days font-bold text-lg lg:text-xl">24</span>
              <span className=' font-medium  lg:font-extralight'>Days</span>
            </div>
            <div className="unit md:text-white text-gray-400 bg-gray-200 md:bg-neutral-600 py-1 md:py-2 md:rounded flex flex-col justify-center items-center w-12 md:w-16">
              <span className="hours font-bold text-lg lg:text-xl">07</span>
              <span className=' font-medium lg:font-extralight'>Hour</span>
            </div>
            <div className="unit md:text-white text-gray-400 bg-gray-200 md:bg-neutral-600 py-1 md:py-2 md:rounded flex flex-col justify-center items-center w-12 md:w-16">
              <span className="hours font-bold text-lg lg:text-xl">36</span>
              <span className=' font-medium lg:font-extralight'>Min</span>
            </div>
            <div className="unit md:text-white text-gray-400 bg-gray-200 md:bg-neutral-600 py-1 md:py-2 md:rounded flex flex-col justify-center items-center w-12 md:w-16">
              <span className="hours font-bold text-lg lg:text-xl">59</span>
              <span className=' font-medium lg:font-extralight'>Sec</span>
            </div>
          </div>
        </div>
        <div className='offer-detail col-span-5 lg:grid lg:grid-cols-5 overflow-x-auto flex justify-center'>
        <div className='offer-details  flex flex-col p-4  justify-center items-center'>
          <div className='offer-image h-24  lg:h-32 flex items-center'>
            <img src={watch} alt='' className=' pb-2' />
          </div>
          <div className='offer-info flex flex-col bg-red  '>
            <span className='text-center py-1'>product</span>
            <span className='discount rounded-xl text-center font-semibold bg-red-200 text-red-500 text-sm  px-2'>-25%</span>
          </div>
        </div>
        <div className='offer-details   flex flex-col  p-4 justify-center items-center'>
          <div className='offer-image h-24  lg:h-32 flex items-center'>
            <img src={lap} alt='' className=' pb-2' />
          </div>
          <div className='offer-info flex flex-col bg-red  '>

            <span className=' text-center py-1'>product</span>
            <span className='discount rounded-xl text-center font-semibold bg-red-200 text-red-500  text-sm px-2'>-25%</span>
          </div>
        </div>
        <div className='offer-details  flex flex-col  p-4  justify-center items-center'>
          <div className='offer-image h-24  lg:h-32 flex items-center'>

            <img src={cam} alt='' className=' pb-2' />
          </div>
          <div className='offer-info flex flex-col bg-red  '>
            <span className=' text-center py-1'>product</span>
            <span className='discount rounded-xl text-center font-semibold bg-red-200 text-red-500 text-sm px-2'>-25%</span>
          </div>
        </div>
        <div className='offer-details  flex flex-col  p-4  justify-center items-center'>
          <div className='offer-image h-24  lg:h-32 flex items-center'>
            <img src={head} alt='' className=' pb-2' />
          </div>
          <div className='offer-info flex flex-col bg-red  '>

            <span className=' text-center py-1'>product</span>
            <span className='discount rounded-xl text-center font-semibold bg-red-200 text-red-500 text-sm  px-2'>-25%</span>
          </div>
        </div>
        <div className='offer-details flex flex-col  p-4  justify-center items-center'>
          <div className='offer-image h-24  md:h-32 flex items-center'>
            <img src={phone} alt='' className=' pb-2 w-full' />
          </div>
          <div className='offer-info flex flex-col bg-red  '>

            <span className=' text-center py-1'>product</span>
            <span className='discount rounded-xl text-center bg-red-200 text-red-500  px-2 text-sm font-semibold'>-25%</span>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default OfferSection;