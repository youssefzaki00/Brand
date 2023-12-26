import React, { useState } from 'react';
import ReportChart from '../imgs/Charts/reports chart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
function ReportsCard(props) {
  const [activeReport, setActiveReport] = useState(0);
  const handleReportClick = (index) => {
    setActiveReport(index);
  }
  return (
      <div className={`bg-white rounded-lg flex px-8 py-4  justify-between gap-4 col-span-${props.cols}  flex-col  lg:w-auto w-full h-full mb-6 lg:mb-0 shadow`}>
      <div className='chart_info flex flex-col justify-between items-start relative'>
        <div className='mb-4 '>
        <h4 className='-mb-0.5  font-semibold'>Reports</h4>
          <span className=' text-xs text-gray-500'>Last 7 days</span>
          <span className=' absolute right-0 top-0 text-gray-500'><FontAwesomeIcon icon={faEllipsisVertical} /></span>
        </div>
        <div className='flex items-center gap-2'>
          {props.Reports.map((Report, index) => (
            <div className={`${activeReport===index?'activeReport':''}   mb-3 lg:mr-4 mr-2 border-b border-b-slate-200 flex flex-col items-center lg:p-4 p-2 pb-2 pl-2 cursor-pointer lg:w-24 w-16`} key={index}
            onClick={()=>{handleReportClick(index)}}
            >
            <span className='lg:text-2xl text-xl font-bold mb-2'>
            {Report.value}K
            </span>
              <span className=' text-xs text-gray-500'>{ Report.label}</span>
          </div>
          ))
          }
        </div>
      </div>
      <div className='chart_img max-w-md '>
      <img src={ReportChart} alt='ReportChart' className='w-full' />
      </div>
    </div>
  )
}

export default ReportsCard