import React from "react";
import "./Footer.css";
import brandLogo from "../../imgs/Group 2.png";
import apple from "../../imgs/appstore2.png";
import android from "../../imgs/googlePlay.png";
import { Link } from "react-router-dom";
// const scrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// };
const Footer = () => {
  return (
    <>
      <div className="bg-white ">
        <footer className="text-gray-700 body-font container  mx-auto xl:px-16 bg-white dark:bg-zinc-900">
          <div className=" flex flex-col flex-wrap  py-24  md:items-center lg:items-center justify-center md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-52 mx-auto text-center md:mx-0 md:text-center">
              {/*brand logo */}
              <Link
                to="/"
                className="flex mb-4 items-center justify-center font-medium text-gray-900 dark:text-white title-font md:justify-center"
              >
                <div className="brand ml-2 flex items-center">
                  <div className="flex items-center">
                    <div className="icon">
                      <img src={brandLogo} alt="brand-logo" />
                    </div>
                    <h2 className="brand-name font-bold text-blue-400 text-2xl ml-5">
                      Brand
                    </h2>
                  </div>
                </div>
              </Link>
              <span className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Brand is the best choice if you are looking for quality,speed
                and professional treat
              </span>
              <div className="mt-4 ">
                <span className="inline-flex gap-2 justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start social-icons">
                  <Link
                    to="/"
                    className="text-white fill-white w-8 h-8 p-2 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer hover:bg-blue-800"
                  >
                    {/*<img src={facebook} alt='facebook' />*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </Link>
                  <Link
                    to="/"
                    className="text-white fill-white w-8 h-8 p-2 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer hover:bg-blue-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </Link>
                  <Link
                    to="/"
                    className="text-white fill-white w-8 h-8 p-2 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer hover:bg-blue-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </Link>
                  <Link
                    to="/"
                    className="text-white fill-white w-8 h-8 p-2 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer hover:bg-blue-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </Link>
                  <Link
                    to="/"
                    className="text-white fill-white w-8 h-8 p-2 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer hover:bg-blue-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex xl:items-start flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-0 xl:pl-20 md:mt-4 md:text-center items-center">
              <div className="w-full px-2 lg:w-1/5 md:w-1/2">
                <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900 dark:text-white  title-font">
                  About
                </h2>
                <nav className="mb-10 list-none border-none flex flex-col  items-center text-center">
                  <li className="mt-2">
                    <Link
                      to="/About Us"
                      className="text-gray-500 dark:text-gray-400  cursor-pointer hover:text-gray-900"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Find store"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Find store
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Categories"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Categories
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Blogs"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Blogs
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-2 lg:w-1/5 md:w-1/2">
                <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900 dark:text-white title-font">
                  Information
                </h2>
                <nav className="mb-10 list-none border-none flex flex-col  items-center">
                  <li className="mt-2">
                    <Link
                      to="/Help Center"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Money Refund"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Money Refund
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Shipping"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Shipping
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Contact"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Contact us
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-2 lg:w-1/5 md:w-1/2">
                <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900 dark:text-white title-font">
                  For Users
                </h2>
                <nav className="mb-10 list-none border-none flex flex-col  items-center">
                  <li className="mt-2">
                    <Link
                      to="/login"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/signup"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Register{" "}
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Setting"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Setting
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/My Orders"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      My Orders
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-2 lg:w-1/5 md:w-1/2">
                <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900 dark:text-white title-font">
                  Platform
                </h2>
                <nav className="mb-10 list-none border-none flex flex-col  items-center">
                  <li className="mt-2">
                    <Link
                      to="/Terms &amp; Privacy"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Terms &amp; Privacy
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Pricing"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/FAQ"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900"
                    >
                      FAQ
                    </Link>
                  </li>
                </nav>
              </div>

              <div className="w-full px-2 lg:w-1/5 md:w-1/2">
                <h2 className="mb-2 text-lg font-semibold tracking-widest text-gray-900 dark:text-white title-font">
                  Get app
                </h2>
                <nav className="mb-10 list-none border-none flex flex-col  items-center lg:block">
                  <li className="mt-2">
                    <Link
                      to="/soon"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900 flex justify-center w-40 xl:w-full xl:block"
                    >
                      <img src={apple} alt="" />
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/soon"
                      className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900 flex justify-center w-40 xl:w-full xl:block"
                    >
                      <img src={android} alt="" />
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
        <div className="bg-gray-300 dark:bg-zinc-800 container mx-auto px-16 flex items-start text-start ">
          <div className=" px-0 py-4 ">
            <span className="text-sm text-gray-700 dark:text-white capitalize xl:text-center">
              © 2023 All rights reserved | Made by Youssef zaki
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
