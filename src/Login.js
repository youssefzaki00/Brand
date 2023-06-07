import React, { useContext, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { AuthContext } from './Auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import brandLogo from './imgs/Group 2.png';

const userInfo = { email: '', password: '' };

function Login() {
  const [input, setInput] = useState(userInfo);
  const [error, setError] = useState('');
    const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setError('');
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      
      await auth.signInWithEmailAndPassword(input.email, input.password);
          toast.success('Welcome back! You have successfully logged in.');

      setInput(userInfo)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  };
  return (
    <>
      <div className="header  bg-white">
        <header className='bg-white  flex items-center'>
          <div className='container mx-auto px-4 xl:px-14  py-3 flex items-center gap-4 justify-between'>
            <div className='brand ml-5 flex items-center'>
              <a href='/#' className='flex items-center'>
                <div className='icon'>
                  <img src={brandLogo} alt='brand-logo' />
                </div>
                <h2 className='brand-name font-bold text-blue-400 text-2xl ml-5'>Brand</h2>
              </a>
            </div>
            <div className='signUp-signIn  flex  mt-2 mb-1 gap-4'>
              <Link to='/login' className='user-login bg-white px-4 py-0 shadow-inner rounded-md text-md text-center font-medium text-blue-600 border border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-slate-100 hover:button-shadow'>Login</Link>
              <Link to='/signup' className='user-join rounded-md p-2.5 bg-blue-600  text-white text-md button text-center flex items-center justify-center hover:bg-blue-700'>sign up
              </Link>
            </div>
          </div>
        </header>
      </div>
      <form className=' bg-gray-50 w-full ' onSubmit={handleSubmit}>
        <div className=" space-y-12 container mx-auto w-4/5 xl:w-2/5 py-16">

          <div className="bg-white border-b border-gray-900/10 pb-12 border border-gray-300 rounded-lg p-4">
            <h2 className=' text-xl font-semibold'>Login</h2>

            <div className=" mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           
              <div className="sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={input.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    className=" shadow-sm   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  bg-gray-50  block w-full p-2.5 "
                  />
                </div>
              </div>
              <div className="sm:col-span-6">

                <div className="mb-2">
                  <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                  <input
                    value={input.password}
                    onChange={handleChange}
                    name='password'
                    type="password"
                    id="password"
                    autoComplete='off'
                    className=" shadow-sm   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  bg-gray-50  block w-full p-2.5  " />
                </div>
              </div>
              <div className=" pb-4 col-span-6 gap-6 flex flex-col text-center">
                <button
                  type="submit"
                  className=" button rounded-md 
          text-md font-semibold text-white   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-blue-600 shadow transition-all">
                  Login
                </button>
                {error && <p className='p-2 col-span-6 text-red-500'>{error}</p>}
                <Link to='/' className="text-sm font-semibold leading-6 px-3 py-2 w-full text-blue-600 hover:bg-text-800 
          bg-gray-50 hover:bg-gray-100  shadow-lg transition-all rounded-md">
                  Cancel
                </Link>
              </div>
              <div className=' col-span-6 flex justify-center '>
                don't have Account ? <Link to='/signup' className='text-blue-600 text-md hover:text-blue-800 font-semibold '>signUp</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 px-24 flex items-start justify-between text-start mx-auto">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">© 2023 All rights reserved | Made by Youssef zaki</p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login