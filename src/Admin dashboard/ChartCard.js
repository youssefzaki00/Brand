import React from 'react';
function ChartCard(props) {
  return (
    <div className={`bg-white rounded-lg flex p-4  justify-between gap-4 col-span-${props.cols} lg:relative flex-col lg:flex-row lg:w-auto w-full h-full shadow`}>
      <div className='chart_info flex flex-col justify-between items-start'>
        <div className='mb-4'>
        <h4 className='-mb-0.5  font-semibold'>{props.name}</h4>
        <span className=' text-xs text-gray-500'>Last 7 days</span>
        </div>
        <div>
          <div className=' text-2xl font-bold mb-3'> {props.number}K</div>
          <div>
            <span className=' text-sm text-green-500 mr-1'>↑ 3%</span>
            <span className='text-xs text-gray-500'>vs last 7 days</span>
          </div>
        </div>
      </div> 
      <div className='chart_img  lg:absolute bottom-4 right-2'>
      <img src={props.img} alt='charts' className='' />
      </div>
    </div>
  )
}

export default ChartCard