import React, { useContext } from 'react';
import './MainSection.css'
import Banner from'../imgs/Banner-board-800x420 2.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import userAvatar from '../imgs/Avatar.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth';
import { auth } from '../firebase';
import SignOut from '../Components/SignOut';
function MainSection() {
  const { user } = useContext(AuthContext)
  return (
    <div className='container mx-auto  p-0 xl:px-16 mt-0 mb-4 lg:mt-1 lg:mb-4'>
      <div className='main-section p-0 bg-white rounded-lg lg:p-4  block xl:grid xl:grid-cols-12 xl:gap-4'>
        <ul className='col-span-3 hidden xl:block text-gray-500'>
          <li className='active'> <a href='/#'>Automobiles</a></li>
          <li> <a href='/#'>Clothes and wear</a></li>
          <li> <a href='/#'>Home interiors</a></li>
          <li> <a href='/#'>Computer and tech</a></li>
          <li> <a href='/#'>Tools, equipments</a></li>
          <li> <a href='/#'>Sports and outdoor</a></li>
          <li> <a href='/#'>Animal and pets</a></li>
          <li> <a href='/#'>Machinery tools</a></li>
          <li> <a href='/#'>More category</a></li>
        </ul>
        <div className='banner col-12 xl:col-span-6 '>
          <div className='more '>
            <p className='text-lg sm:text-2xl pt-4'>Latest trending </p>
            <h2 className=' font-bold mb-4 text-2xl sm:text-4xl'>Electronic items</h2>
            <button className=' font-semibold bg-white px-3 lg:px-6 py-1 lg:py-2 rounded-md  lg:font-medium  text-blue-600 lg:text-black'>Learn more</button>
          </div>
          <img src={Banner} alt='Banner-Board' className=' w-full h-full' />
        </div>
        <div className='col-span-3 rounded  hidden xl:block h-full '>
          <div className='user  py-4 bg-blue-100 rounded-lg px-2 mb-2' >
          <div className='user-picture flex '>
              <img src={userAvatar} className='mb-2' alt='user-avatar'/>
              <p className=' flex flex-col ml-4 font-medium leading-5'>
                
                <span>{user ? user.displayName: 'Hi, user'}</span>
                <span className='pt-1'>{user ? 'Welcome to Brand': "let's get started"}</span>
            </p>
            </div>
            {user ? 
              <SignOut/>
              
              
              :
            <div className='signUp-signIn  flex flex-col mt-2 mb-0'>
              <Link to='/signup' className='user-join rounded-md mb-2 py-1.5 bg-blue-600  text-white text-md button text-center'>join now
                </Link>
                <Link  to='/login' className='user-login bg-white py-1.5 rounded-md text-md text-center font-medium text-blue-600'>Login</Link>
            </div>
            }
            
          </div>
          <div className={`discount bg-orange-500 text-white rounded-lg flex flex-col py-5 px-4 mb-2 ${user ? 'pb-10' : 'pb-5'}`}>
          <span>Get Us $10 off</span>
          <span>with a new</span>
          <span>supplier</span>
          </div>
          <div className={`preferences text-white px-4 py-5  rounded-lg  flex flex-col bg-teal-500 ${user ? 'pb-10' : 'pb-5'}`}>
          <span>Send quotes with</span>
          <span>Supplier</span>
          <span>preferences</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;