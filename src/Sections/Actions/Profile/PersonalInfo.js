import React, { useEffect, useState } from "react";
import userImg from "../../../imgs/avatar2.png";
import { UserData } from "../../../Context/UserDataContext";
import { useOrderdProducts } from "../../../Context/OrderdProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";

function PersonalInfo() {
  const userData = UserData();
  const orderdProducts = useOrderdProducts();

  const [orderd, setOrderd] = useState([]);

  const arr = [];
  useEffect(() => {
    orderdProducts.map((order) =>
      userData.id === order.userID ? arr.push(order) : false
    );
    setOrderd(arr);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderdProducts, userData]);

  return (
    <div className="flex flex-col gap-3  ">
      <h3 className=" text-lg text-gray-900 font-semibold">Personal info</h3>
      <div className="flex gap-3 items-center border-b border-gray-300 pb-4">
        <img
          src={userImg}
          alt="user"
          className=" object-contain w-16 h-16 rounded-full"
        />
        <div>
          <p>
            {userData.firstName} {userData.lastName}
          </p>
          <div className="flex mt-1 text-gray-600 gap-1">
            <p> Email: {userData.email},</p> <p>Phone: {userData.phone}</p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 pb-4 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="shadow-sm rounded-md border border-gray-300 p-4">
            <p className=" text-gray-500">
              <FontAwesomeIcon icon={faLocationDot} /> United States, 490 Old
              Capitol Trail
            </p>
            <div className="flex items-center mt-2">
              <button className="text-blue-600 hover:text-blue-800 hover:underline ">
                Edit
              </button>
              <span className="bg-gray-400 block w-1 h-1 rounded-full mx-2"></span>
              <button className="text-blue-600 hover:text-blue-800 hover:underline ">
                Delete
              </button>
            </div>
          </div>
          <div className="shadow-sm rounded-md border border-gray-300 p-4">
            <p className=" text-gray-500">
              <FontAwesomeIcon icon={faLocationDot} /> United States, 490 Old
              Capitol Trail
            </p>
            <div className="flex items-center mt-2">
              <button className="text-blue-600 hover:text-blue-800 hover:underline ">
                Edit
              </button>
              <span className="bg-gray-400 block w-1 h-1 rounded-full mx-2"></span>
              <button className="text-blue-600 hover:text-blue-800 hover:underline ">
                Delete
              </button>
            </div>
          </div>
        </div>
        <button
          className="text-blue-600 py-1.5 px-2.5 font-medium rounded-md border border-blue-600 w-fit
        shadow-sm text-base hover:bg-blue-600 hover:text-white transition-all duration-500"
        >
          <FontAwesomeIcon icon={faPlus} /> Add new address
        </button>
      </div>
      {orderd.map((order) => (
        <div className=" pb-4 flex flex-col gap-4">
          <h3 className="text-lg text-gray-900 font-semibold">
            My recent orders
          </h3>
          <div className="flex flex-col  p-4 rounded-md border border-blue-500">
            <div className="flex items-center justify-between border-b border-gray-300 pb-4">
              <div>
                <div className="flex items-center">
                  <p className="text-gray-900 font-medium">Order ID: 8924</p>
                  <span className="bg-gray-400 block w-1 h-1 rounded-full mx-2"></span>
                  <p className="text-orange-500 font-medium ">Pending</p>
                </div>
                <p className="text-gray-400">Date: 16 june 2024</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-red-500 py-1.5 px-2.5  rounded-md border border-red-500 w-fit
              shadow-sm text-base hover:bg-red-500 hover:text-white transition-all duration-500"
                >
                  Cancle order
                </button>
                <button
                  className="text-white py-1.5 px-2.5 bg-blue-600 rounded-md border border-blue-600 w-fit
              shadow-sm text-base hover:bg-blue-800  transition-all duration-500"
                >
                  Track order
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 border-b border-gray-300 py-4 gap-4">
              <div className="border-r border-r-gray-300 ">
                <h4 className="text-gray-400">Contact</h4>
                <p className="text-gray-600">
                  {userData.firstName}
                  {userData.lastName}
                </p>
                <p className="text-gray-600">Phone: {userData.phone}</p>
                <p className="text-gray-600">Email: {userData.email}</p>
              </div>
              <div className=" border-r border-r-gray-300 ">
                <h4 className="text-gray-400">Shipping address</h4>
                <p className="text-gray-600">EGYPT</p>
                <p className="text-gray-600">
                  House number :{order.house}
                  {order.address}
                  {order.city}
                  ZIP:{order.zip}
                </p>
              </div>
              <div className="">
                <h4 className="text-gray-400">Payment</h4>
                <p className="text-green-600">Visa **** 4216</p>
                <p className="text-gray-600">Shipping fee: $56</p>
                <p className="text-gray-600">Total paid: $456 </p>
              </div>
            </div>
            <div className="pt-4 grid grid-cols-3 gap-4">
              {order.orderdProducts.map((product) => (
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={product.img1}
                    alt="product"
                    className="w-16 h-16 p-2 bg-white border border-gray-300 rounded-md"
                  />
                  <div className="flex flex-col">
                    <div className="flex">
                      <span className="font-medium mr-1">1x</span>
                      <p className="text-blue-600 fonr-medium">
                        {product.name}
                      </p>
                    </div>
                    <span className="text-gray-400 ">
                      Total: ${product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonalInfo;
