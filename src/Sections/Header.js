import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Components/Sidebar.js';
import Actions from '../Components/Actions.js';
import Searchbar from '../Components/Searchbar.js';
import Searchbar2 from '../Components/Searchbar2';
import brandLogo from '../imgs/Group 2.png';
function Header() {
  const [active,setActive] = useState('');
  return (
    <div className='bg-white'>
      <Sidebar Show={active} />
      <header className='bg-white header flex items-center'>
        <div className='container mx-auto px-4 xl:px-14  py-6 flex items-center gap-4 justify-between'>
          <div className='brand ml-5 flex items-center'>
            <FontAwesomeIcon icon={faBars} className='text-xl -ml-3 mr-6 block xl:hidden cursor-pointer'
              onClick={() => {
                setActive(active === '' ? 'show' : '')
              }}
            />
            <a href='/#' className='flex items-center'>
              <div className='icon'>
                {/*<FontAwesomeIcon icon={faBagShopping} className='text-2xl text-blue-200  brand-logo  z-10' />*/}
                <img src={brandLogo} alt='brand-logo'/>
              </div>
              <h2 className='brand-name font-bold text-blue-400 text-2xl ml-5'>Brand</h2>
            </a>
          </div>
          <Searchbar />
          <div className='icons flex items-center -mr-3'>
            <a href='/#' className='flex  items-center flex-col justify-center'>
              <FontAwesomeIcon icon={faUser} className='text-xl mr-4 block lg:hidden text-gray-400' />
            </a>
            <a href='/#' className='flex  items-center flex-col'>
              <FontAwesomeIcon icon={faCartShopping} className='text-xl mr-6 block lg:hidden  text-gray-400' />
            </a>
            <Actions />
            
          </div>
        </div>
      </header>
      <Searchbar2 position1={'block'} position2={'hidden'} />
    </div>
  );
}

export default Header;                          