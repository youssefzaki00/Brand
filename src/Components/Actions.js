import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart,faMessage,faUser, } from '@fortawesome/free-solid-svg-icons'
function Actions() {
  return (
    <ul className=' actions hidden lg:flex items-center'>
      <li>
        <a href='/#'>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </a>
      </li>
      <li>
        <a href='/#'>
          <FontAwesomeIcon icon={faMessage} />
          <span>Message</span>
        </a>
      </li>
      <li>
        <a href='/#'>
          <FontAwesomeIcon icon={faHeart} />
          <span>Orders</span>
        </a>
      </li>
      <li>
        <a href='/#'>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>My cart</span>
        </a>
      </li>
    </ul>
  );
}

export default Actions