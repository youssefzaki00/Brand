import React, { useContext, useEffect, useState } from "react";
import { useCartProducts } from "./CartContext";
import { useProducts } from "./ProductsContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import db from "./firebase";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { AuthContext } from "./Auth";
function CheckOut() {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [house, setHouse] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [zip, setZip] = useState("");
  const [desc, setDesc] = useState("");
  const { user } = useContext(AuthContext);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };
  const egypt_cities = [
    "Cairo",
    "Alexandria",
    "Giza",
    "Luxor",
    "Aswan",
    "Sharm El Sheikh",
    "Hurghada",
    "Mansoura",
    "Tanta",
    "Port Said",
    "Suez",
    "Ismailia",
    "Beni Suef",
    "Sohag",
    "Assiut",
    "Zagazig",
    "Fayoum",
    "Minya",
    "Damietta",
    "Kafr El Sheikh",
    "Damanhur",
    "Qena",
    "Shibin El Kom",
    "Banha",
    "Arish",
    "Mallawi",
    "10th of Ramadan City",
    "New Cairo",
    "Akhmim",
    "Marsa Matruh",
    "Siwa Oasis",
    // Add more cities as needed
  ];
  const products = useProducts();
  const { CartProducts, RemoveAllFromCart } = useCartProducts();
  const CartProductsList = products.filter((product) =>
    CartProducts.includes(product.id)
  );
  const navigate = useNavigate();
  const resetForm = () => {
    // Clear the form inputs after successful submission
    setSelectedRadio("");
    setAddress("");
    setCity("");
    setHouse("");
    setPostalCode("");
    setZip("");
  };
  const handleOrder = async () => {
    try {
      await addDoc(collection(db, "Orders"), {
        userID: user.uid, // Use the same ID generated for the product
        selectedRadio: selectedRadio,
        address: address,
        city: city,
        house: house,
        postalCode: postalCode,
        zip: zip,
        desc: desc,
        timestamp: serverTimestamp(),
      });

      resetForm();
      RemoveAllFromCart();
      navigate("/");
      toast.success(
        "Thank you for your order! Your order has been successfully placed."
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      selectedRadio !== "" &&
      address !== "" &&
      city !== "" &&
      house !== "" &&
      postalCode !== "" &&
      zip !== ""
    ) {
      handleOrder();
    } else {
      toast.error("Something is wrong. Please fill in all fields.");
    }
  };

  return (
    <div className="container mx-auto px-16 grid grid-cols-9 mt-4 gap-8">
      <div className="bg-white rounded-lg shadow-sm col-span-6  p-4 border border-gray-300 h-fit">
        <h3 className="text-gray-800 font-medium text-xl col-span-6">
          Shipping info
        </h3>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <label
            htmlFor="1"
            className={`flex p-4 w-full cursor-pointer border text-gray-600 rounded-md text-lg focus:border-blue-500 focus:ring-blue-500 transition-colors ${
              selectedRadio === "1"
                ? "border-blue-500 bg-blue-50"
                : "hover:bg-gray-100 border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="1"
              className="shrink-0 w-4 -mt-4 border-gray-300 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 cursor-pointer"
              id="1"
              checked={selectedRadio === "1"}
              onChange={handleRadioChange}
            />
            <div className="flex flex-col">
              <span className=" text-gray-600 ml-3">Express delivery </span>
              <span className=" text-xs text-gray-400 ml-3">
                3-4 days via fedex
              </span>
            </div>
          </label>

          <label
            htmlFor="2"
            className={`flex p-4 w-full border rounded-md text-lg text-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-colors cursor-pointer   ${
              selectedRadio === "2"
                ? " border-blue-500 bg-blue-50 "
                : " hover:bg-gray-100 border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="2"
              className="shrink-0 w-4 -mt-4 border-gray-300 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 cursor-pointer hover:bg-gray-50 "
              id="2"
              checked={selectedRadio === "2"}
              onChange={handleRadioChange}
            />
            <div className="flex flex-col">
              <span className=" text-gray-600 ml-3">Post office</span>
              <span className=" text-xs text-gray-400 ml-3">
                20-30 days via post
              </span>
            </div>
          </label>

          <label
            htmlFor="3"
            className={`flex p-4 w-full border cursor-pointer  rounded-md text-lg text-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-colors  ${
              selectedRadio === "3"
                ? "border-blue-500 bg-blue-50 "
                : "hover:bg-gray-100 border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="3"
              className="shrink-0 w-4 -mt-4 border-gray-300 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 cursor-pointer"
              id="3"
              checked={selectedRadio === "3"}
              onChange={handleRadioChange}
            />
            <div className="flex flex-col">
              <span className="text-gray-600 ml-3">Self pick-up</span>
              <span className="text-xs text-gray-400 ml-3">
                Come to our shop
              </span>
            </div>
          </label>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="col-span-2 gap-1 flex flex-col">
            <label className="text-gray-700 font-medium">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`bg-gray-50 hover:bg-white border border-gray-300 rounded p-1.5 focus:border-blue-600`}
              placeholder="49 hasan radwan street"
            />
          </div>

          <div className="col-span-1 gap-1 flex flex-col relative">
            <label className="text-gray-700 font-medium">City</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 bg-gray-50 rounded p-2 hover:bg-white outline-none focus:outline-none focus:border-blue-600"
            >
              {egypt_cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1 gap-1 flex flex-col">
            <label className="text-gray-700 font-medium">House</label>
            <input
              type="text"
              value={house}
              onChange={(e) => setHouse(e.target.value)}
              className="bg-gray-50 hover:bg-white border border-gray-300 rounded p-1.5 focus:border-blue-600"
            />
          </div>

          <div className="col-span-1 gap-1 flex flex-col">
            <label className="text-gray-700 font-medium">Postal code</label>
            <input
              type="number"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="bg-gray-50 hover:bg-white border border-gray-300 rounded p-1.5 focus:border-blue-600"
            />
          </div>

          <div className="col-span-1 gap-1 flex flex-col">
            <label className="text-gray-700 font-medium">Zip</label>
            <input
              type="number"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="bg-gray-50 hover:bg-white border border-gray-300 rounded p-1.5 focus:border-blue-600"
            />
          </div>
          <div className="col-span-3  gap-1 flex flex-col">
            <label className="text-gray-700 font-medium">
              Message to seller
            </label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows="5"
              className="bg-gray-50 hover:bg-white border border-gray-300 rounded p-1.5 outline-none focus:outline-none  resize-y focus:border-blue-600"
              placeholder="Enter additional comments or description here..."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end items-center mt-4 gap-2">
          <button
            className="bg-white text-blue-600 py-1.5 px-3 font-medium 
                rounded-md border border-gray-300 w-fit shadow-sm h-fit hover:bg-blue-600 hover:text-white
                transition-all duration-500"
          >
            Cancle
          </button>
          <button
            onClick={handleSubmit}
            className="hover:bg-white hover:text-blue-600 py-1.5 px-3 font-medium 
                  rounded-md border border-gray-300 w-fit shadow-sm  h-fit flex justify-center items-center 
                  bg-blue-600 text-white
                transition-all duration-500"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="col-span-3">
        <h3 className="font-medium text-xl text-gray-900 mb-4">Summary</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 font-medium">Subtotal:</span>
          <span className="text-gray-600 font-medium">$213</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 font-medium">Discount:</span>
          <span className="text-red-600 font-medium">
            <span className="text-red-600 text-lg font-medium mr-2">-</span>$213
          </span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 font-medium">Tax:</span>
          <span className="text-green-600 font-medium">
            <span className="text-green-600 text-lg font-medium mr-2">+</span>
            $213
          </span>
        </div>
        <div className="flex items-center justify-between mb-4 ">
          <span className="text-gray-400 font-medium">Shipping:</span>
          <span className="text-green-600 font-medium">
            <span className="text-green-600 text-lg font-medium mr-2">+</span>
            $213
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-t-gray-400 mb-4 pt-4">
          <span className="text-gray-400 font-medium">Total:</span>
          <span className="text-gray-900 font-medium text-xl ">$3414</span>
        </div>
        <div className="border-t border-t-gray-400 mb-2 pt-4">
          <h3 className="text-xl text-gray-900 font-medium mb-4">
            Items in cart
          </h3>
          {CartProductsList.map((product) => (
            <div className="flex items-start gap-4 mb-4">
              <img
                src={product.img1}
                alt="product"
                className="w-16 h-16 p-2 bg-white border border-gray-300 rounded-md"
              />
              <div className="flex flex-col">
                <div className="flex">
                  <span className="font-medium mr-1">1x</span>
                  <p className="text-blue-600 fonr-medium">{product.name}</p>
                </div>
                <span className="text-gray-400 ">Total: $295.99</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
