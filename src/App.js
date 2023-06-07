import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Sections/Header';
import Navbar from './Sections/Navbar';
import NavbarMB from './Sections/NavbarMB';
import MainSection from './Sections/MainSection';
import OfferSection from './Sections/OfferSection';
import Jewelry from './Sections/Jewelry';
import Electronics from './Sections/Electronics';
import InquirySection from './Sections/InquirySection';
import Recommended from './Sections/Recommended';
import Services from './Sections/Services';
import Suppliers from './Sections/Suppliers';
import Subscribe from './Sections/Subscribe';
import Footer from './Sections/Footer';
import { Routes,Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Soon from './Components/Soon.js';
import { AuthProvider } from './Auth';
function App() {

  return (
    <AuthProvider>

      <div
        className='App  bg-gray-50 h-full '>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Navbar />
              <NavbarMB />
              <MainSection />
              <OfferSection />
              <Jewelry />
              <Electronics />
              <InquirySection />
              <Recommended />
              <Services />
              <Suppliers />
              <Subscribe />
              <Footer />
            </>

          } />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/soon' element={<Soon />} />
      
        </Routes>

      </div>

    </AuthProvider>

  );
}

export default App;
