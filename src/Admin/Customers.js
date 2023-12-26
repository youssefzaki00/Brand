import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CustomersTable from './CustomersTable'

function Customers() {
    // const { user } = useContext(AuthContext);
  const Cells = ['name', 'phone number', 'created', 'action'];
  return (
    <div className='Customers'>
      <div className='flex justify-between items-baseline'>
        <div className=' relative flex items-center shadow rounded-3xl my-6 bg-white w-full lg:w-fit' >
          <input type='search' placeholder='Search...' className='px-4 py-2  rounded-3xl focus:placeholder:opacity-0  ' />
          <FontAwesomeIcon icon={faSearch} alt='search icon'
            className=' absolute  right-4 text-gray-400   ' />
        </div>
      </div>
    
      <CustomersTable Cells={ Cells}   />
    </div>
  )
}

export default Customers