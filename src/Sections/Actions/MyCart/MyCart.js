import React, { useEffect, useState } from "react";
import DropDown from "../../../Components/DropDown/DropDown.js";
import { Link, useNavigate } from "react-router-dom";
import pay0 from "../../../imgs/pay0.png";
import pay1 from "../../../imgs/Logo.svg";
import pay2 from "../../../imgs/Logo2.svg";
import pay3 from "../../../imgs/Logo3.svg";
import pay4 from "../../../imgs/image 21.png";
import { useCartProducts } from "../../../Context/CartContext.js";
import { useSavedProducts } from "../../../Context/SavedContext.js";
import { useProducts } from "../../../Context/ProductsContext.js";
import { auth } from "../../../Firebase/firebase.js";
import { toast } from "react-toastify";

function MyCart() {
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };
  const handleApplyCoupon = () => {
    // You can implement the logic to apply the coupon here
    // For now, let's just set the couponApplied state to true
    setCouponApplied(true);
  };
  const names = [];
  for (let i = 1; i <= 10; i++) {
    names.push(`Qty: ${i}`);
  }
  const products = useProducts();
  const { CartProducts, removeFromCart, RemoveAllFromCart } = useCartProducts();
  const { savedProducts, addProduct } = useSavedProducts();
  const cartIsEmpty = CartProducts.length === 0;

  const CartProductsList = products.filter((product) =>
    CartProducts.includes(product.id)
  );
  const handleSaveProduct = (product) => {
    const isSaved = product && savedProducts.includes(product.id);
    if (!isSaved) {
      addProduct(product.id);
      removeFromCart(product.id); // Remove from saved products
      toast.success("Product saved successfully");
    } else {
      toast.error("Product is already saved");
    }
  };
  const handleRemove = (product) => {
    removeFromCart(product.id);
    toast.error("Product is Removed successfully");
  };
  let subTotal = 0;
  CartProductsList.forEach((e) => {
    subTotal += parseInt(e.price);
  });
  const Tax = Math.floor((subTotal / 100) * 14);
  const Discount = Math.floor((subTotal / 100) * 10);
  const Total = Math.floor(subTotal + Tax - Discount);
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white my-4">
        My cart ({CartProducts.length})
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="bg-white dark:bg-zinc-800 rounded-md border border-gray-300 h-fit">
            {CartProductsList && CartProductsList.length === 0 ? (
              <p className="text-gray-800 dark:text-white text-center py-6 text-xl font-medium flex items-center justify-center">
                No products available in Your cart.
              </p>
            ) : (
              CartProductsList.map((product) => (
                <div
                  className="Product p-4 border-b border-b-gray-300 flex flex-col lg:flex-row justify-between"
                  key={product.id}
                >
                  <div className="flex flex-col lg:flex-row ">
                    <img
                      className="mr-2 w-20 h-20 p-2 border border-gray-300 rounded-md "
                      src={product.img1}
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-gray-800 dark:text-gray-300 font-medium mt-2 lg:mt-0">
                        {product.name}
                      </h4>
                      <span className="text-sm text-gray-500">
                        Size: medium, Color: blue, Material: Plastic{" "}
                      </span>
                      <span className="text-sm text-gray-500">
                        Seller: Artel Market
                      </span>
                      <div className="flex flex-row gap-2 mt-2 items-center">
                        <button
                          className=" text-red-600 py-1.5 px-2.5 font-medium 
                    rounded-md border border-gray-300 w-fit shadow-sm text-sm hover:bg-red-600 hover:text-white
                transition-all duration-500 "
                          onClick={() => handleRemove(product)}
                        >
                          Remove
                        </button>
                        <button
                          className="text-blue-600 py-1.5 px-2.5 font-medium 
                          rounded-md border border-gray-300 w-fit shadow-sm text-sm hover:bg-blue-600 hover:text-white
                          transition-all duration-500"
                          onClick={() => handleSaveProduct(product)}
                        >
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-2 items-center mt-2 lg:mt-0">
                    <span className="text-blue-600 font-medium mr-1 flex items-center justify-center">
                      Price: ${product.price}
                    </span>
                    <div className="border border-gray-300 rounded  ">
                      <DropDown names={names} />
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className="flex justify-between items-center p-4">
              <Link
                to="/AllCategory/AllProducts"
                className="button gap-1 text-white rounded-lg p-2 flex justify-center items-center hover:text-blue-600 hover:bg-white hover:border hover:border-gray-300 transition-all duration-500 hoverring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="hover:fill-blue-600"
                >
                  <path
                    d="M18.3332 10.0833H7.17734L12.3015 4.95913L10.9998 3.66663L3.6665 11L10.9998 18.3333L12.2923 17.0408L7.17734 11.9166H18.3332V10.0833Z"
                    fill="hover:fill-blue-600"
                  />
                </svg>
                Back to shop
              </Link>
              <button
                className=" text-blue-600 py-1.5 px-2.5 font-medium 
              rounded-md border border-gray-300 w-fit shadow-sm hover:bg-blue-600 hover:text-white
                transition-all duration-500 "
                onClick={RemoveAllFromCart}
              >
                Remove All
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center mt-4 gap-4">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#DEE2E7" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30 20H29V18C29 15.24 26.76 13 24 13C21.24 13 19 15.24 19 18V20H18C16.9 20 16 20.9 16 22V32C16 33.1 16.9 34 18 34H30C31.1 34 32 33.1 32 32V22C32 20.9 31.1 20 30 20ZM24 29C22.9 29 22 28.1 22 27C22 25.9 22.9 25 24 25C25.1 25 26 25.9 26 27C26 28.1 25.1 29 24 29ZM21 20V18C21 16.34 22.34 15 24 15C25.66 15 27 16.34 27 18V20H21Z"
                  fill="#8B96A5"
                />
              </svg>
              <div className="flex flex-col  ">
                <span className="text-gray-800 font-medium">
                  Secure payment
                </span>
                <span className="text-gray-400">
                  Have you ever finally just{" "}
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#DEE2E7" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32 15H16C14.9 15 14.01 15.9 14.01 17L14 35L18 31H32C33.1 31 34 30.1 34 29V17C34 15.9 33.1 15 32 15ZM19 22H29C29.55 22 30 22.45 30 23C30 23.55 29.55 24 29 24H19C18.45 24 18 23.55 18 23C18 22.45 18.45 22 19 22ZM25 27H19C18.45 27 18 26.55 18 26C18 25.45 18.45 25 19 25H25C25.55 25 26 25.45 26 26C26 26.55 25.55 27 25 27ZM29 21H19C18.45 21 18 20.55 18 20C18 19.45 18.45 19 19 19H29C29.55 19 30 19.45 30 20C30 20.55 29.55 21 29 21Z"
                  fill="#8B96A5"
                />
              </svg>
              <div className="flex flex-col  ">
                <span className="text-gray-800 font-medium">
                  Customer support
                </span>
                <span className="text-gray-400">
                  Have you ever finally just{" "}
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#DEE2E7" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.5 20H29V18C29 16.9 28.1 16 27 16H15C13.9 16 13 16.9 13 18V27C13 28.1 13.9 29 15 29C15 30.66 16.34 32 18 32C19.66 32 21 30.66 21 29H27C27 30.66 28.34 32 30 32C31.66 32 33 30.66 33 29H34C34.55 29 35 28.55 35 28V24.67C35 24.24 34.86 23.82 34.6 23.47L32.3 20.4C32.11 20.15 31.81 20 31.5 20ZM18 30C17.45 30 17 29.55 17 29C17 28.45 17.45 28 18 28C18.55 28 19 28.45 19 29C19 29.55 18.55 30 18 30ZM31.5 21.5L33.46 24H29V21.5H31.5ZM30 30C29.45 30 29 29.55 29 29C29 28.45 29.45 28 30 28C30.55 28 31 28.45 31 29C31 29.55 30.55 30 30 30Z"
                  fill="#8B96A5"
                />
              </svg>
              <div className="flex flex-col  ">
                <span className="text-gray-800 font-medium">Free delivery</span>
                <span className="text-gray-400">
                  Have you ever finally just{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
          <div className="bg-white dark:bg-zinc-800 rounded-md border border-gray-300 p-4 flex flex-col">
            <span>Have a coupon?</span>
            <div className="border border-gray-300 rounded-md mt-4 bg-white dark:bg-zinc-800 flex items-center p-2 relative">
              <input
                className="dark:bg-zinc-800"
                type="text"
                placeholder="Add a coupon"
                value={coupon}
                onChange={handleCouponChange}
              />
              <button
                className="bg-white dark:bg-zinc-800 text-blue-600 cursor-pointer absolute z-10 right-2 border-l border-l-gray-300 h-full px-2.5  font-medium"
                onClick={handleApplyCoupon}
              >
                Apply
              </button>
            </div>
            {couponApplied && (
              <span className="text-green-500 mt-2 mx-2">
                Coupon applied successfully!
              </span>
            )}
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-md border border-gray-300 shadow-md p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span>Subtotal:</span>
              <span className="text-gray-800 dark:text-white">${subTotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Discount:</span>
              <span className="text-red-500">- ${Discount}</span>
            </div>
            <div className="flex items-center justify-between border-b border-b-gray-300  pb-4">
              <span>Tax:</span>
              <span className="text-green-500">+ ${Tax}</span>
            </div>
            <div className="flex items-center justify-between ">
              <span className="text-gray-800 dark:text-white font-semibold">
                Total:
              </span>
              <span className="text-gray-800 dark:text-white font-semibold text-lg">
                ${Total}
              </span>
            </div>
            {cartIsEmpty ? (
              <button className="check_out rounded-lg px-4 py-3 mt-4 text-white text-lg font-medium text-center cursor-not-allowed bg-gray-800">
                Your cart is empty.
              </button>
            ) : (
              <Link
                to="/CheckOut"
                className="check_out rounded-lg px-4 py-3 mt-4 text-white text-lg font-medium text-center"
              >
                Proceed to checkout
              </Link>
            )}
            <div className="flex items-center gap-2 mt-1">
              <div className="p-2 rounded border border-gray-200 w-10 h-5 flex items-center justify-center">
                <img src={pay0} alt="" />
              </div>
              <div className="p-2 rounded border border-gray-200 w-10 h-5 flex items-center justify-center">
                <img src={pay1} alt="" />
              </div>
              <div className="p-2 rounded border border-gray-200 w-10 h-5 flex items-center justify-center">
                <img src={pay2} alt="" />
              </div>
              <div className="p-2 rounded border border-gray-200 w-10 h-5 flex items-center justify-center">
                <img src={pay3} alt="" />
              </div>
              <div className="p-2 rounded border border-gray-200 w-10 h-5 flex items-center justify-center">
                <img src={pay4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
