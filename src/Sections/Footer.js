import React from 'react';
import './Footer.css'
import brandLogo from '../imgs/Group 2.png';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
  import facebook from '../imgs/social/Fill 183.png'
  import instagram from '../imgs/social/instagram3.png'
  import twitter from '../imgs/social/twitter3.png'
  import youtube from '../imgs/social/youtube3.png'
import linkedin from '../imgs/social/linkedin3.png'
import apple from '../imgs/appStore.png'
  import android from '../imgs/googlePlay.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="  bg-white">

      <footer className=" text-gray-700 body-font container  mx-auto xl:px-16 bg-white">
        <div
          className=" flex flex-col flex-wrap  py-24  md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-52 mx-auto text-center md:mx-0 md:text-left">
            {/*brand logo */}
            <a href='/#' className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <div className='brand ml-2 flex items-center'>
                <a href='/#' className='flex items-center'>
                  <div className='icon'>
                    <img src={brandLogo} alt='brand-logo' />
                  </div>
                  <h2 className='brand-name font-bold text-blue-400 text-2xl ml-5'>Brand</h2>
                </a>
              </div>
            </a>
            {/*brand description */}
            <p className="mt-4 text-sm text-gray-500">Brand is the best choice if you are looking for quality,speed and professional treat</p>
            {/* social icons*/}
            <div className="mt-4 ">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start social-icons">
                <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-700">
                  <img src={facebook} alt='facebook' />
                </a>
                <a href='/#' className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <img src={twitter} alt='twitter' />
                </a>
                <a href='/#' className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <img src={linkedin} alt='linkedin' />
                </a>
                <a href='/#' className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <img src={instagram} alt='instagram' />
                </a>
                <a href='/#' className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <img src={youtube} alt='youtube' />
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left items-baseline">
            <div className="w-full px-2 lg:w-1/5 md:w-1/2">
              <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900  title-font">About</h2>
              <nav className="mb-10 list-none border-none">
                <li className="mt-2">
                  <a href='/#' className="text-gray-500  cursor-pointer hover:text-gray-900">About Us</a>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Find store</a>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Categories</a>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Blogs</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-2 lg:w-1/5 md:w-1/2">
              <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900 title-font">Information</h2>
              <nav className="mb-10 list-none border-none">
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Help Center</a>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Money Refund</a>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Shipping</a>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Contact us</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-2 lg:w-1/5 md:w-1/2">
              <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900 title-font">For Users</h2>
              <nav className="mb-10 list-none border-none">
                <li className="mt-2">
                  <Link to='/login' className="text-gray-500 cursor-pointer hover:text-gray-900">Login</Link>
                </li>
                <li className="mt-2">
                  <Link to='/signup' className="text-gray-500 cursor-pointer hover:text-gray-900">Register </Link>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Setting</a>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">My Orders</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-2 lg:w-1/5 md:w-1/2">
              <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900 title-font">Platform
              </h2>
              <nav className="mb-10 list-none border-none">
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</a>
                </li>
                <li className="mt-2">
                  <a href='/#' className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</a>
                </li>
              </nav>
            </div>
          
            <div className="w-full px-2 lg:w-1/5 md:w-1/2">
              <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900 title-font">Get app</h2>
              <nav className="mb-10 list-none border-none">
                <li className="mt-2">
                   <Link  to='/soon'className="text-gray-500 cursor-pointer hover:text-gray-900 flex justify-center xl:block">
                    <img src={apple} alt='' />
                  </Link>
                </li>
                <li className="mt-2">
                  <Link  to='/soon' className="text-gray-500 cursor-pointer hover:text-gray-900 flex justify-center xl:block"> <img src={android} alt='' />
                  </Link>
                </li>

              </nav>
            </div>
          </div>
        </div>
   
      </footer>
      <div className="bg-gray-300 px-24 flex items-start justify-between text-start mx-auto">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-gray-700 capitalize xl:text-center">© 2023 All rights reserved | Made by Youssef zaki</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
