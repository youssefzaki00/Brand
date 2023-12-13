import React, { useContext } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Soon from "./Components/Soon.js";
import Dashboard from "./Admin dashboard/Dashboard";
import OrderManagement from "./Admin dashboard/OrderManagement";
import MainHome from "./MainHome";
import DashboardContent from "./Admin dashboard/DashboardContent";
import Customers from "./Admin dashboard/Customers";
import AddProducts from "./Admin dashboard/AddProducts";
import ContactForm from "./Sections/ContactForm";
import { AuthContext } from "./Auth";

function App() {
  const { user } = useContext(AuthContext);


  return (
    <div className="App  bg-gray-50 h-full  w-full  ">
      <Routes>
        <Route path="*" element={<MainHome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/soon" element={<Soon />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route
          path="/AdminDashboard/*"
          element={
            user && user.email === "admin@admin.com" ? (
              <Dashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route
            path="Dashboard"
            element={
              user && user.email === "admin@admin.com" ? (
                <DashboardContent />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="OrderManagement"
            element={
              user && user.email === "admin@admin.com" ? (
                <OrderManagement />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="Customers"
            element={
              user && user.email === "admin@admin.com" ? (
                <Customers />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="CouponCode" element={<Soon />} />
          <Route path="Categories" element={<Soon />} />
          <Route path="Transaction" element={<Soon />} />
          <Route path="Brand" element={<Soon />} />
          <Route path="AddProducts" element={<AddProducts />} />
          <Route path="ProductsList" element={<Soon />} />
          <Route path="ManageAdmins" element={<Soon />} />
          <Route path="AdminRoles" element={<Soon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
