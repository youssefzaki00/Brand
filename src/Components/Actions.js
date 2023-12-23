import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useSavedProducts } from "../SavedContext";
import { useCartProducts } from "../CartContext";
function Actions() {
  const { savedProducts } = useSavedProducts();
  const { CartProducts } = useCartProducts();
  return (
    <ul className=" actions hidden md:flex items-center">
      <li
        onClick={() => {
          if (!auth.currentUser) {
            toast.error("Please login");
          }
        }}
      >
        <Link to={!auth.currentUser ? "/login" : "/profile"}>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </Link>
      </li>
      <li
        onClick={() => {
          if (!auth.currentUser) {
            toast.error("Please login");
          }
        }}
      >
        <Link to={!auth.currentUser ? "/login" : "/Message"}>
          <FontAwesomeIcon icon={faMessage} />
          <span>Message</span>
        </Link>
      </li>
      <li
        onClick={() => {
          if (!auth.currentUser) {
            toast.error("Please login");
          }
        }}
      >
        <Link to={!auth.currentUser ? "/login" : "/Saved"} className="relative">
          <FontAwesomeIcon icon={faHeart} />
          <span>Saved</span>
          <span
            className={` absolute -right-2 -top-2 w-4 h-4 items-center justify-center p-2  text-xs font-medium text-white bg-blue-500 rounded-full ${
              savedProducts.length===0 ? "hidden" : "flex"
            }`}
          >
            {savedProducts ? savedProducts.length : 0}
          </span>
        </Link>
      </li>
      <li
        onClick={() => {
          if (!auth.currentUser) {
            toast.error("Please login");
          }
        }}
      >
        <Link
          to={!auth.currentUser ? "/login" : "/MyCart"}
          className="relative"
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <span>MyCart</span>
          <span
            className={`flex absolute -right-2 -top-2 w-4 h-4 items-center justify-center p-2  text-xs font-medium text-white bg-red-500 rounded-full ${
              CartProducts.length===0 ? "hidden" : "flex"
            }`}
          >
            {CartProducts ? CartProducts.length : 0}
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default Actions;
