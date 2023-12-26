import React from 'react'
import Countries from '../imgs/Charts/bargraph.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
function TopCountries(props) {

  return (
      <div className={`bg-white rounded-lg flex px-6 py-4  gap-4 col-span-${props.cols}  flex-col lg:w-auto w-full h-full shadow`}>
      <div className='chart_info flex flex-col  items-start'>
        <div className='-mb-0.5'>
        <h4 className=' font-semibold mb-1'>Users in last 30 minutes</h4>
        <div className=' text-2xl font-bold -mb-0.5 '> {props.number}K</div>
        <span className=' text-xs text-gray-500 font-medium'>Users per minute</span>
        </div>
      </div> 
      <div className='chart_img '>
      <img src={Countries} alt='charts' className='' />
      </div>
      <div className='flex items-center justify-between font-semibold'>
        <span>Top Countries</span>
        <span>Users</span>
      </div>
      {props.Countries.map((country) => (
        
        <div className='CountryUsers  items-center mt-4 gap-2 grid grid-cols-12' key={country.label}>
          <img src={country.img} alt='' className=' col-span-2' />
          <div className='flex flex-col  col-span-3 '>
            <span className='font-medium '>{country.value}k</span>
            <span className='text-gray-500 font-medium text-xs'>{country.label}</span>
          </div>
          <div className="progress-bar col-span-5 grid items-center gap-2 grid-cols-5">
            <div className='col-span-3 bg-slate-300 rounded mr-2'>
            <div
            className="progress-bar__fill bg-blue-600 h-1 rounded "
              style={{ width: `${country.percentage}%` }}>
              </div>
            </div>
            <div className="progress-bar__text col-span-2 text-xs font-medium text-slate-600 ">{`${country.percentage}%`}</div>
          </div>
          <span className=' text-sm text-green-500 col-span-2 font-semibold'>
            <FontAwesomeIcon icon={faAngleUp} /> {country.progress}%</span>
        </div>
      ))}
      
    </div>
  )
}
// {<span className=' text-sm text-green-500 mr-1'>↑ 3%</span>}
export default TopCountries