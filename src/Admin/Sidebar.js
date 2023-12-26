import {
  faAngleLeft,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import brandLogo from "../imgs/Group 2.png";
import { Link } from "react-router-dom";

function Sidebar({
  sidebarStatus,
  handleSidebarStatus,
  handleMenuItemClick,
  activeSection,
}) {
  const handleCloseSidebar = () => {
    if (sidebarStatus) {
      handleSidebarStatus();
    }
  };
  return (
    <div
      className={`SideBar w-full lg:w-auto   ${
        sidebarStatus ? "grid" : "hidden"
      } overflow-auto
      bg-white p-4 items-start fixed h-screen z-50 grid-cols-2`}
    >
      <div className="w-full brand  items-center justify-between relative col-span-2 grid-cols-2 grid mb-8 p-3 py-2">
        <Link to="/" className="flex items-center">
          <div className="icon">
            <img src={brandLogo} alt="brand-logo" />
          </div>
          <h2 className="brand-name font-bold text-blue-400 text-2xl ml-5">
            Brand
          </h2>
        </Link>
        <div
          className=" items-center absolute right-0 text-gray-400 text-sm cursor-pointer flex"
          onClick={() => handleCloseSidebar()}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faBarsStaggered} rotation={180} />
        </div>
      </div>
      <div className="col-span-2">
        <span className=" uppercase p-3  text-gray-400 text-xs">main menu</span>
        <ul className="my-4">
          <Link
            to="Dashboard"
            onClick={() => handleMenuItemClick("Dashboard")}
            className={activeSection === "Dashboard" ? "activeSection" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M17.4167 7.98418L12.5281 4.18184C11.6456 3.49524 10.4095 3.49524 9.52696 4.18184L4.63746 7.98418C4.042 8.44725 3.69386 9.15943 3.69421 9.91376V16.5138C3.69421 17.5263 4.51503 18.3471 5.52755 18.3471H16.5275C17.5401 18.3471 18.3609 17.5263 18.3609 16.5138V9.91376C18.3609 9.15934 18.0125 8.44709 17.4167 7.98418"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.6667 13.7499C12.6409 14.9718 9.35737 14.9718 7.33337 13.7499"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Dashboard
          </Link>
          <Link
            to="OrderManagement"
            className={
              activeSection === "OrderManagement" ? "activeSection" : ""
            }
            onClick={() => handleMenuItemClick("OrderManagement")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
            >
              <ellipse
                cx="5.49996"
                cy="17.4167"
                rx="1.83333"
                ry="1.83333"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse
                cx="5.49996"
                cy="17.4167"
                rx="1.83333"
                ry="1.83333"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse
                cx="15.5833"
                cy="17.4167"
                rx="1.83333"
                ry="1.83333"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse
                cx="15.5833"
                cy="17.4167"
                rx="1.83333"
                ry="1.83333"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5833 15.5833H5.49996V2.75H3.66663"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5833 15.5833H5.49996V2.75H3.66663"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 4.58333L18.3333 5.5L17.4167 11.9167H5.5"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 4.58333L18.3333 5.5L17.4167 11.9167H5.5"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            OrderManagement
          </Link>

          <Link
            to="Customers"
            className={activeSection === "Customers" ? "activeSection" : ""}
            onClick={() => handleMenuItemClick("Customers")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
            >
              <ellipse
                cx="8.25004"
                cy="6.41667"
                rx="3.66667"
                ry="3.66667"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse
                cx="8.25004"
                cy="6.41667"
                rx="3.66667"
                ry="3.66667"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.6666 2.86906C16.289 3.28447 17.4238 4.74639 17.4238 6.42114C17.4238 8.0959 16.289 9.55782 14.6666 9.97323"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.6666 2.86906C16.289 3.28447 17.4238 4.74639 17.4238 6.42114C17.4238 8.0959 16.289 9.55782 14.6666 9.97323"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 19.2499V17.4166C19.2404 15.7524 18.1113 14.3034 16.5 13.8874"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 19.2499V17.4166C19.2404 15.7524 18.1113 14.3034 16.5 13.8874"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Customers
          </Link>
          <Link
            to="CouponCode"
            className={activeSection === "CouponCode" ? "activeSection" : ""}
            onClick={() => handleMenuItemClick("CouponCode")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M13.75 4.58334V6.41667"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.75 4.58334V6.41667"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.75 10.0833V11.9167"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.75 10.0833V11.9167"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.75 15.5833V17.4167"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.75 15.5833V17.4167"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.58333 4.58334H17.4167C18.4292 4.58334 19.25 5.40415 19.25 6.41667V9.16667C18.2375 9.16667 17.4167 9.98748 17.4167 11C17.4167 12.0125 18.2375 12.8333 19.25 12.8333V15.5833C19.25 16.5959 18.4292 17.4167 17.4167 17.4167H4.58333C3.57081 17.4167 2.75 16.5959 2.75 15.5833V12.8333C3.76252 12.8333 4.58333 12.0125 4.58333 11C4.58333 9.98748 3.76252 9.16667 2.75 9.16667V6.41667C2.75 5.40415 3.57081 4.58334 4.58333 4.58334"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.58333 4.58334H17.4167C18.4292 4.58334 19.25 5.40415 19.25 6.41667V9.16667C18.2375 9.16667 17.4167 9.98748 17.4167 11C17.4167 12.0125 18.2375 12.8333 19.25 12.8333V15.5833C19.25 16.5959 18.4292 17.4167 17.4167 17.4167H4.58333C3.57081 17.4167 2.75 16.5959 2.75 15.5833V12.8333C3.76252 12.8333 4.58333 12.0125 4.58333 11C4.58333 9.98748 3.76252 9.16667 2.75 9.16667V6.41667C2.75 5.40415 3.57081 4.58334 4.58333 4.58334"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            CouponCode
          </Link>

          <Link
            to="Categories"
            className={activeSection === "Categories" ? "activeSection" : ""}
            onClick={() => handleMenuItemClick("Categories")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
            >
              <circle
                cx="8.70833"
                cy="8.70833"
                r="5.95833"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="8.70833"
                cy="8.70833"
                r="5.95833"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="9.16663"
                y="9.16667"
                width="10.0833"
                height="10.0833"
                rx="2"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="9.16663"
                y="9.16667"
                width="10.0833"
                height="10.0833"
                rx="2"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Categories
          </Link>

          <Link
            to="Transaction"
            className={activeSection === "Transaction" ? "activeSection" : ""}
            onClick={() => handleMenuItemClick("Transaction")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M12.8334 2.75V6.41667C12.8334 6.92293 13.2438 7.33333 13.75 7.33333H17.4167"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.8334 2.75V6.41667C12.8334 6.92293 13.2438 7.33333 13.75 7.33333H17.4167"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5834 19.25H6.41671C5.40419 19.25 4.58337 18.4292 4.58337 17.4167V4.58333C4.58337 3.57081 5.40419 2.75 6.41671 2.75H12.8334L17.4167 7.33333V17.4167C17.4167 18.4292 16.5959 19.25 15.5834 19.25Z"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5834 19.25H6.41671C5.40419 19.25 4.58337 18.4292 4.58337 17.4167V4.58333C4.58337 3.57081 5.40419 2.75 6.41671 2.75H12.8334L17.4167 7.33333V17.4167C17.4167 18.4292 16.5959 19.25 15.5834 19.25Z"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 8.25001H9.16667"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 8.25001H9.16667"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 11.9167H13.75"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 11.9167H13.75"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 15.5833H13.75"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 15.5833H13.75"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Transaction
          </Link>

          <Link
            to="Brand"
            className={activeSection === "Brand" ? "activeSection" : ""}
            onClick={() => handleMenuItemClick("Brand")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0001 16.2708L5.34243 19.2454L6.42318 12.9451L1.83984 8.48371L8.16484 7.56705L10.9937 1.83513L13.8225 7.56705L20.1475 8.48371L15.5642 12.9451L16.6449 19.2454L11.0001 16.2708Z"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0001 16.2708L5.34243 19.2454L6.42318 12.9451L1.83984 8.48371L8.16484 7.56705L10.9937 1.83513L13.8225 7.56705L20.1475 8.48371L15.5642 12.9451L16.6449 19.2454L11.0001 16.2708Z"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Brand
          </Link>

          <span className=" uppercase p-3 text-gray-400 text-xs">Products</span>
          <ul className="my-4">
            <Link
              to="AddProducts"
              className={activeSection === "AddProducts" ? "activeSection" : ""}
              onClick={() => handleMenuItemClick("AddProducts")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="8.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 11H13.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 11H13.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 8.25V13.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 8.25V13.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              AddProducts
            </Link>

            <Link
              to="ProductsList"
              className={
                activeSection === "ProductsList" ? "activeSection" : ""
              }
              onClick={() => handleMenuItemClick("ProductsList")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11 2.75L18.3333 6.875V15.125L11 19.25L3.66663 15.125V6.875L11 2.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 2.75L18.3333 6.875V15.125L11 19.25L3.66663 15.125V6.875L11 2.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L18.3333 6.875"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L18.3333 6.875"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11V19.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11V19.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L3.66663 6.875"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L3.66663 6.875"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ProductsList
            </Link>
          </ul>
          <span className=" uppercase p-3 text-gray-400 text-xs">Admin</span>
          <ul className="my-4">
            <Link
              to="ManageAdmins"
              className={
                activeSection === "ManageAdmins" ? "activeSection" : ""
              }
              onClick={() => handleMenuItemClick("ManageAdmins")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="8.25"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <ellipse
                  cx="11"
                  cy="9.16666"
                  rx="2.75"
                  ry="2.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <ellipse
                  cx="11"
                  cy="9.16666"
                  rx="2.75"
                  ry="2.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.65393 17.2782C6.11982 15.7277 7.54754 14.6662 9.1666 14.6667H12.8333C14.4545 14.6661 15.8837 15.7303 16.3478 17.2837"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.65393 17.2782C6.11982 15.7277 7.54754 14.6662 9.1666 14.6667H12.8333C14.4545 14.6661 15.8837 15.7303 16.3478 17.2837"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ManageAdmins
            </Link>

            <Link
              to="AdminRoles"
              className={activeSection === "AdminRoles" ? "activeSection" : ""}
              onClick={() => handleMenuItemClick("AdminRoles")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.46458 3.95725C9.85508 2.34758 12.1449 2.34758 12.5354 3.95725C12.6543 4.44772 13.0002 4.85194 13.4664 5.0451C13.9327 5.23826 14.4631 5.19713 14.894 4.93442C16.3084 4.07275 17.9282 5.69158 17.0665 7.10692C16.8042 7.53762 16.7631 8.06766 16.9561 8.5336C17.149 8.99954 17.5527 9.34542 18.0428 9.46458C19.6524 9.85508 19.6524 12.1449 18.0428 12.5354C17.5523 12.6543 17.1481 13.0002 16.9549 13.4664C16.7617 13.9327 16.8029 14.4631 17.0656 14.894C17.9272 16.3084 16.3084 17.9282 14.8931 17.0665C14.4624 16.8042 13.9323 16.7631 13.4664 16.9561C13.0005 17.149 12.6546 17.5527 12.5354 18.0428C12.1449 19.6524 9.85508 19.6524 9.46458 18.0428C9.34574 17.5523 8.9998 17.1481 8.53357 16.9549C8.06734 16.7617 7.53689 16.8029 7.106 17.0656C5.69158 17.9272 4.07183 16.3084 4.9335 14.8931C5.19584 14.4624 5.23687 13.9323 5.04393 13.4664C4.851 13.0005 4.44727 12.6546 3.95725 12.5354C2.34758 12.1449 2.34758 9.85508 3.95725 9.46458C4.44772 9.34574 4.85194 8.9998 5.0451 8.53357C5.23826 8.06734 5.19713 7.53689 4.93442 7.106C4.07275 5.69158 5.69158 4.07183 7.10692 4.9335C8.02358 5.49083 9.21158 4.99767 9.46458 3.95725Z"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.46458 3.95725C9.85508 2.34758 12.1449 2.34758 12.5354 3.95725C12.6543 4.44772 13.0002 4.85194 13.4664 5.0451C13.9327 5.23826 14.4631 5.19713 14.894 4.93442C16.3084 4.07275 17.9282 5.69158 17.0665 7.10692C16.8042 7.53762 16.7631 8.06766 16.9561 8.5336C17.149 8.99954 17.5527 9.34542 18.0428 9.46458C19.6524 9.85508 19.6524 12.1449 18.0428 12.5354C17.5523 12.6543 17.1481 13.0002 16.9549 13.4664C16.7617 13.9327 16.8029 14.4631 17.0656 14.894C17.9272 16.3084 16.3084 17.9282 14.8931 17.0665C14.4624 16.8042 13.9323 16.7631 13.4664 16.9561C13.0005 17.149 12.6546 17.5527 12.5354 18.0428C12.1449 19.6524 9.85508 19.6524 9.46458 18.0428C9.34574 17.5523 8.9998 17.1481 8.53357 16.9549C8.06734 16.7617 7.53689 16.8029 7.106 17.0656C5.69158 17.9272 4.07183 16.3084 4.9335 14.8931C5.19584 14.4624 5.23687 13.9323 5.04393 13.4664C4.851 13.0005 4.44727 12.6546 3.95725 12.5354C2.34758 12.1449 2.34758 9.85508 3.95725 9.46458C4.44772 9.34574 4.85194 8.9998 5.0451 8.53357C5.23826 8.06734 5.19713 7.53689 4.93442 7.106C4.07275 5.69158 5.69158 4.07183 7.10692 4.9335C8.02358 5.49083 9.21158 4.99767 9.46458 3.95725Z"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="2.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="2.75"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              AdminRoles
            </Link>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
