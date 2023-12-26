import React from 'react'
import DropDown from '../DropDown/DropDown';

const types=["All Types","Special","Only best","Latest"]
function Searchbar() {
  return (
    <div className='search-categories border-2 
          border-solid rounded-lg items-center justify-center
        hidden xl:flex' >
      <input type='search' placeholder='Search' className='pr-0 sm:pr-16 md:pr-20
          lg-p-36 xl:pr-40 2xl:pr48 h-full
          pl-4 search-input'
      />
      <DropDown className=' h-full' names={types} />
      <input type='submit' value={'Search'} className='search-button px-4 w-24   text-white  ' />
    </div>
  );
}

export default Searchbar