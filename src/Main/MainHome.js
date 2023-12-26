import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Sections/Header/Header";
import Navbar from "../Sections/Navbar/Navbar";
import NavbarMB from "../Sections/Navbar/NavbarMB.js";
import MainSection from "../Sections/Home/MainSection/MainSection.js";
import OfferSection from "../Sections/Home/OfferSection/OfferSection.js";
import Electronics from "../Sections/Home/Electronics/Electronics.js";
import InquirySection from "../Sections/Home/InquirySection/InquirySection.js";
import Recommended from "../Sections/Home/Recommended/Recommended.js";
import Services from "../Sections/Home/Services/Services.js";
import Suppliers from "../Sections/Home/Suppliers/Suppliers.js";
import Subscribe from "../Sections/Home/Subscribe/Subscribe.js";
import Footer from "../Sections/Footer/Footer.js";
import AllCategory from "../Sections/AllProducts/AllCategory.js";
import AllProducts from "../Sections/AllProducts/AllProducts.js";
import Soon from "../Components/Loader/Soon.js";
import ProductPage from "../Components/ProductPage.js";
import HomeFurniture from "../Sections/Home/HomeFurniture/HomeFurniture.js";
import MyCart from "../Sections/Actions/MyCart/MyCart.js";
import Saved from "../Sections/Actions/Saved/Saved.js";
import Profile from "../Sections/Actions/Profile/Profile.js";
import CheckOut from "../Sections/Actions/MyCart/CheckOut.js";
import { useCartProducts } from "../Context/CartContext.js";

function MainHome() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const { CartProducts } = useCartProducts();
  useEffect(() => {
    if (CartProducts) {
      if (CartProducts.length === 0) {
        setCartIsEmpty(true);
      } else {
        setCartIsEmpty(false);
      }
    }
    scrollToTop();
  }, [CartProducts]);
  return (
    <>
      <Header />
      <Navbar />
      <NavbarMB />
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <MainSection />
              <OfferSection />
              <HomeFurniture />
              <Electronics />
              <InquirySection />
              <Recommended />
              <Services />
              <Suppliers />
            </>
          }
        />
        <Route path="/AllCategory/*" element={<AllCategory />}>
          <Route path="AllProducts" element={<AllProducts />} />
          <Route path=":category/:name/:id" element={<ProductPage />} />
        </Route>

        <Route path="/MyCart" element={<MyCart />} />
        <Route
          path="/CheckOut"
          element={cartIsEmpty ? <Navigate to="/MyCart" /> : <CheckOut />}
        />
        <Route path="/Saved" element={<Saved />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/HotOffers" element={<Soon />} />
        <Route path="/GiftBoxes" element={<Soon />} />
        <Route path="/Projects" element={<Soon />} />
        <Route path="/MenuItems" element={<Soon />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
}

export default MainHome;
