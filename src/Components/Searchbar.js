import React from 'react'
import DropDown from './DropDown';
const types = {
  1: {
    name: "All Types",
    link : "",
  },
  2: {
    name: "All Types",
    link : ""
  },
  3: {
    name: "All Types",
    link : ""
  },
  4: {
    name: "All Types",
    link : ""
  },
  5: {
    name: "All Types",
    link : ""
  },
}
function Searchbar() {
  return (
    <div className='search-categories border-2 
          border-solid rounded-lg items-center justify-center
        hidden xl:flex' >
      <input type='search' placeholder='Search' className='pr-0 sm:pr-16 md:pr-20
          lg-p-36 xl:pr-40 2xl:pr48
          pl-4 search-input'
      />
      <DropDown className=' h-9' names={types} />
      <input type='submit' value={'Search'} className='search-button px-4 w-24   text-white  button  ' />
    </div>
  );
}

export default Searchbar