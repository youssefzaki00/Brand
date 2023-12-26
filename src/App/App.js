import React, { useContext } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../Auth/SignUp.js";
import Login from "../Auth/Login.js";
import Soon from "../Components/Loader/Soon.js";
import Dashboard from "../Admin dashboard/Dashboard.js";
import OrderManagement from "../Admin dashboard/OrderManagement.js";
import MainHome from "../Main/MainHome.js";
import DashboardContent from "../Admin dashboard/DashboardContent.js";
import Customers from "../Admin dashboard/Customers.js";
import AddProducts from "../Admin dashboard/AddProducts.js";
import ContactForm from "../Sections/ContactForm/ContactForm.js";
import { AuthContext } from "../Auth/Auth.js";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App bg-gray-50 dark:bg-zinc-900 dark:text-white h-full  w-full  ">
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
