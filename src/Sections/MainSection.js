import React, { useContext, useEffect, useMemo, useState } from "react";
import "./MainSection.css";
import Banner1 from "../imgs/Banner-board-800x420 2.png";
import Banner2 from "../imgs/main-phone.png";
import userAvatar from "../imgs/Avatar.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import SignOut from "../Components/SignOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function MainSection() {
  const [displayName, setDisplayName] = useState();
  const { user } = useContext(AuthContext);
  const [currentImage, setCurrentImage] = useState(0);
  const images = useMemo(() => [Banner1, Banner2], []);
  const handleBannerChange = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      const usersRef = collection(db, "Users");
      try {
        const querySnapshot = await getDocs(usersRef);
        querySnapshot.forEach((doc) => {
          const userData = doc.data(); // Access data using doc.data()
          if (userData.id === user.uid) {
            setDisplayName(`${doc.data().firstName} ${doc.data().lastName}`);
          }
        });
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    fetchData();
  }, [user]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);
  const sections = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <div className="container mx-auto  p-0 xl:px-14 mt-0 mb-4 lg:mt-1 lg:mb-4">
      <div className="main-section p-0 bg-white rounded-lg lg:p-4 grid grid-cols-12 xl:gap-4 min-h-[320px]">
        <ul className="col-span-3 hidden xl:block text-gray-500">
          {sections.map((section, i) => (
            <li key={i} className="">
              {" "}
              <Link to="/">{section}</Link>
            </li>
          ))}
        </ul>
        <div className="banner col-span-12 xl:col-span-6 relative">
          <div className="more z-10">
            <p className="text-lg sm:text-2xl pt-4">Latest trending</p>
            <h2 className="font-bold mb-4 text-2xl sm:text-4xl">
              Electronic items
            </h2>
            <button className="font-semibold bg-white px-3 lg:px-6 py-1 lg:py-2 rounded-md lg:font-medium text-blue-600 lg:text-black">
              Learn more
            </button>
          </div>
          <div className="image-container relative w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Banner-${index}`}
                className={`w-full h-full absolute ${
                  index === currentImage ? "active-slide" : "hidden-slide"
                }`}
              />
            ))}
          </div>
          <div className="buttons-container mt-2 absolute top-0 left-5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleBannerChange(index)}
                className={`bg-blue-600 w-2 h-2 rounded-full mx-1 ${
                  index === currentImage ? "opacity-100" : "opacity-50"
                }`}
              ></button>
            ))}
          </div>
          <div className="banner-buttons-container">
            <button
              className="banner-button prev absolute top-1/2 left-3 text-3xl"
              onClick={() =>
                handleBannerChange(
                  (currentImage - 1 + images.length) % images.length
                )
              }
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="banner-button next absolute top-1/2 right-3 text-3xl"
              onClick={() =>
                handleBannerChange((currentImage + 1) % images.length)
              }
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className="col-span-3 rounded  hidden xl:block h-full gap-4">
          <div className="user  py-5 bg-blue-100 rounded-lg px-2 mb-4">
            <div className="user-picture flex ">
              <img src={userAvatar} className="mb-2" alt="user-avatar" />
              <p className=" flex flex-col ml-4 font-medium leading-5">
                <span>{user ? displayName : "Hi, user"}</span>
                <span className="pt-1">
                  {user ? "Welcome to Brand" : "let's get started"}
                </span>
              </p>
            </div>
            {user ? (
              <SignOut />
            ) : (
              <div className="signUp-signIn  flex flex-col mt-2 mb-0">
                <Link
                  to="/signup"
                  className="user-join rounded-md mb-2 py-1.5 bg-blue-600  text-white text-md button text-center"
                >
                  join now
                </Link>
                <Link
                  to="/login"
                  className="user-login bg-white py-1.5 rounded-md text-md text-center font-medium text-blue-600"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
          <div
            className={`discount bg-orange-500 text-white rounded-lg flex flex-col py-5 pb-4 px-4 mb-3 ${
              user ? "pb-10" : "pb-5"
            }`}
          >
            <span>Get Us $10 off with a new</span>
            <span>supplier account</span>
            <span className="mt-2 hover:underline font-semibold cursor-pointer">
              Get now
            </span>
          </div>
          <div
            className={`preferences text-white px-4 py-5 pb-4 rounded-lg  flex flex-col bg-teal-500 ${
              user ? "pb-10" : "pb-5"
            }`}
          >
            <span>Send quotes with Supplier</span>
            <span>preferences</span>
            <span className="mt-2 hover:underline font-semibold cursor-pointer">
              Try now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
