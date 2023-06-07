import React from 'react'
// import'./Sections/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCity, faGlobe, faHeadset, faHeart, faHouse, faList, faStore } from '@fortawesome/free-solid-svg-icons';
function Sidebar(props) {
  return (
    <aside id="separator-sidebar" className={`fixed top-0 -left-96 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${props.Show } overflow-y-auto`
    } aria-label="Sidebar">
      
      <div className='bg-slate-100 w-full py-4 px-4 flex flex-col
        justify-start items-start'>
        <FontAwesomeIcon icon={faCircleUser}   className='text-gray-400  text-5xl mb-3'/>
        <div>
          <a href='/#'>Sign in </a> | <a href='/#'>Register</a>
        </div>
      </div>    
      <div className="h-full px-3 py-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          <li>
            <a href="/" className="flex items-center p-2   rounded-lg   hover:bg-slate-100  ">
              <FontAwesomeIcon icon={faHouse} className='text-gray-400'/>
              <span className="ml-3">Home</span>
            </a>
          </li>
          <li>
            <a href="/#" className="flex items-center p-2   rounded-lg   hover:bg-gray-100  ">
              <FontAwesomeIcon icon={faList} className='text-gray-400' />
              <span className="flex-1 ml-3 whitespace-nowrap">Categories</span>
              
            </a>
          </li>
          <li>
            <a href="/#" className="flex items-center p-2   rounded-lg   hover:bg-gray-100  ">
              <FontAwesomeIcon icon={faHeart} className='text-gray-400'/>
              <span className="flex-1 ml-3 whitespace-nowrap">Favorites</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
          </li>
          <li>
            <a href="/#" className="flex items-center p-2   rounded-lg   hover:bg-gray-100  ">
              <FontAwesomeIcon icon={faStore} className='text-gray-400' />
              <span className="flex-1 ml-3 whitespace-nowrap">My orders</span>
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">5</span>
            </a>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 ">
          <li>
            <a href="/#" className="flex items-center p-2   transition duration-75 rounded-lg hover:bg-gray-100     group">
              <FontAwesomeIcon icon={faGlobe}  className='text-gray-400'/>
              <span className="ml-4">English | USD</span>
            </a>
          </li>
          <li>
            <a href="/#" className="flex items-center p-2   transition duration-75 rounded-lg hover:bg-gray-100     group">
              <FontAwesomeIcon icon={faHeadset}  className='text-gray-400'/>
              <span className="ml-3">Contact us</span>
            </a>
          </li>
          <li>
            <a href="/#" className="flex items-center p-2   transition duration-75 rounded-lg hover:bg-gray-100     group">
              <FontAwesomeIcon icon={faCity}  className='text-gray-400'/>
              <span className="ml-3">About</span>
            </a>
          </li>

        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 ">
          <li>
            <a href="/#" className="flex items-center p-2   transition duration-75 rounded-lg hover:bg-gray-100     group">
              
              <span className="ml-3">User agreement</span>
            </a>
          </li>
          <li>
            <a href="/#" className="flex items-center p-2   transition duration-75 rounded-lg hover:bg-gray-100     group">
              <span className="ml-3">Partnership</span>
            </a>
          </li>
          <li>
            <a href="/#" className="flex items-center p-2   transition duration-75 rounded-lg hover:bg-gray-100     group">
              <span className="ml-3">Privacy policy</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar