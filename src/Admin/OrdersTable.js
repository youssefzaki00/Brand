import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import dropIcon from '../imgs/Icon/material-symbols_arrow-drop-down-circle-outline-rounded.svg'
import upIcon from '../imgs/Icon/material-symbols_arrow-drop-up-circle-outline-rounded.svg'
import PagesPagination from '../Components/PagesPagination';
function OrdersTable({Cells,Rows}) {

  const [ShowDetails, setShowDetails] = useState();
  const handleShowDetails = (id) => {
    if (ShowDetails === id) {
      setShowDetails('')
    } else {
      setShowDetails(id)
    }
  }
  return (
    <div className='bg-white rounded-xl orderTable py-2 shadow'>
      <div className='TableHeader grid grid-cols-3 lg:grid-cols-7 border-b border-b-gray-300'>
        {Cells.map((Cell) => (
          <div key={Cell} className='text-xs px-2.5 lg:px-5 py-1.5 lg:py-3 uppercase text-gray-400 '>
            {Cell}
          </div>
        ))}
      </div>
      
      {Rows.map((Row) => (
        <div key={Row.id} className= {`${ShowDetails=== Row.id ? 'ShowDetails':''} 
          grid grid-cols-3 lg:grid-cols-7 border-b border-b-gray-300  items-center justify-center content-center select-none cursor-pointer`} 
          onClick={()=>handleShowDetails(Row.id)}>
          <div className=' px-2 lg:px-5 py-1.5 lg:py-3 select-none text-xs'>
            <span className='text-blue-700 text-sm select-none'>#</span>
            {Row.id}
          </div>
          <div className=' px-2 lg:px-5 py-1.5 lg:py-3 text-xs'>{Row.created}</div>
          <div className=' px-2 lg:px-5 py-1.5 lg:py-3 text-xs'>{Row.customer}</div>
          <div className=' px-2 lg:px-5 py-1.5 lg:py-3 text-xs'>${Row.total}</div>
          <div className=' px-2 lg:px-5 py-1.5 lg:py-3 text-xs flex gap-2 items-center'>${Row.profit.amount}<div className='bg-green-100 text-green-500 font-medium rounded py-0.5 px-1 text-xs'>{Math.round((Row.profit.amount/Row.total)*100)}%</div>
          </div>
          <div className={`flex px- py-4 select-none text-xs items-center `}>
            <div className={`${Row.status} cursor-pointer flex items-center py-1 lg:py-1.5 px-2 lg:px-2.5 gap-2 lg:gap-2.5 rounded select-none  font-semibold  lg:ml-4`}>
            {Row.status} 
              <FontAwesomeIcon icon={faChevronDown} />
            
            </div>
          </div>
          <div className=' w-fit hidden lg:block lg:ml-12 cursor-pointer select-none '>
            {ShowDetails === Row.id ?
              
              <img src={upIcon} alt="upIcon" />
                :
              <img src={dropIcon} alt="dropIcon" />
            }
          </div>
        </div>
      ))}
      <PagesPagination/>
    </div>
  )
}

export default OrdersTable