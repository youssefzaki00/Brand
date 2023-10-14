import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart,faMessage,faUser, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Actions() {
  return (
    <ul className=' actions hidden md:flex items-center'>
      <li>
        <Link to='Profile'>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </Link>
      </li>
      <li>
        <Link to='Message'>
          <FontAwesomeIcon icon={faMessage} />
          <span>Message</span>
        </Link>
      </li>
      <li>
        <Link to='Saved'>
          <FontAwesomeIcon icon={faHeart} />
          <span>Saved</span>
        </Link>
      </li>
      <li>
        <Link to='MyCart'>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>My cart</span>
        </Link>
      </li>
    </ul>
  );
}

export default Actions