import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Dnavbar({handleSidebarStatus,sidebarStatus,activeSection }) {
  const handleSidebar = () => {
    handleSidebarStatus();
  }
  return (
    <div className='mb-6 mt-2 '>
      <div className='D_header  flex items-center justify-between relative'>
        <div className={`absolute  left-0 cursor-pointer ${sidebarStatus ? 'hidden' : 'block'}`}>
          <FontAwesomeIcon icon={faBars}
          onClick={ handleSidebar} />
        </div>
        <h2 className={`text-xl font-bold  ${sidebarStatus ? 'ml-0' : 'ml-6'}`}>{activeSection }</h2>
        <div className='flex items-center'>
          <div className='notifications text-gray-500 cursor-pointer relative text-lg mt-1'>
            <FontAwesomeIcon icon={faBell} />
          <span className=' absolute -top-0.5 -right-1.5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center h-3.5  w-3.5'>5</span>
          </div>
          <div className='admin-image bg-sky-500 rounded-full  w-7 h-7 ml-5 relative  cursor-pointer'>
            <span
            className='bg-green-500 w-2 h-2 rounded-full absolute bottom-0 right-0 border-white border z-10'>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dnavbar