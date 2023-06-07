import React from 'react';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignOut() {
function handleSignOut() {
  try {
    auth.signOut();
    toast.success('You have successfully signed out.');
  } catch (error) {
    console.error('Error signing out:', error);
  }
}

  return (
    <button className='user-sign-out flex justify-center items-center bg-white py-1.5 rounded-md text-md text-center font-medium w-full mt-2 text-blue-600' onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default SignOut;
