import React from 'react';
import './Navbar.css';
import DropDown from '../Components/DropDown';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Navbar() {
  return (
    <nav className='bg-white mb-5 hidden xl:block'>
      <div className='container mx-auto px-16 flex items-center justify-between'>
        <ul className='nav-list flex items-center px-1 py-2 justify-between'>
          <li>
            <a href='/#'><FontAwesomeIcon icon={faBars}className='bar mr-3'/>
              All category</a>
          </li>
          <li>
            <a href='/#'>Hot offers</a>
          </li>
          <li>
            <a href='/#'>Gift boxes</a>
          </li>
          <li>
            <a href='/#'>Projects</a>
          </li>
          <li>
            <a href='/#'>Menu items </a>
          </li>
          <li>
            <a href='/#'>Help</a>
          </li>
          <DropDown />
    
        </ul>
        <div className='country'>
        <DropDown />
        <DropDown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
