import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Sections/Header";
import Navbar from "./Sections/Navbar";
import NavbarMB from "./Sections/NavbarMB";
import MainSection from "./Sections/MainSection";
import OfferSection from "./Sections/OfferSection";
import Electronics from "./Sections/Electronics";
import InquirySection from "./Sections/InquirySection";
import Recommended from "./Sections/Recommended";
import Services from "./Sections/Services";
import Suppliers from "./Sections/Suppliers";
import Subscribe from "./Sections/Subscribe";
import Footer from "./Sections/Footer";
import AllCategory from "./Sections/AllCategory";
import AllProducts from "./Sections/AllProducts";
import Soon from "./Components/Soon";
import ProductPage from "./Components/ProductPage";
import HomeFurniture from "./Sections/HomeFurniture";
import MyCart from "./Sections/MyCart";
import Saved from "./Sections/Saved";
import Profile from "./Sections/Profile";
import CheckOut from "./CheckOut";
import { useCartProducts } from "./CartContext";

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
