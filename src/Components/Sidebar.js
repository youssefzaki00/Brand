import React, { useContext, useEffect, useState } from "react";
// import'./Sections/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faCircleUser,
  faCity,
  faGlobe,
  faHeadset,
  faHeart,
  faHouse,
  faList,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSavedProducts } from "../SavedContext";
import { useCartProducts } from "../CartContext";
import { AuthContext } from "../Auth";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
function Sidebar({ active, setActive }) {
  const { savedProducts } = useSavedProducts();
  const { CartProducts } = useCartProducts();
  const [displayName, setDisplayName] = useState();
  const { user } = useContext(AuthContext);
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
  return (
    <aside
      id="separator-sidebar"
      className={`fixed top-0  z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${
        active ? "left-64 " : "-left-96"
      } overflow-y-auto`}
      aria-label="Sidebar"
    >
      <div
        className="bg-slate-100 w-full py-4 px-4 flex flex-col relative
        justify-start items-start"
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-gray-400  text-5xl mb-3"
        />
        <div>
          {user ? (
            <div className=" font-semibold text-gray-800">Welcome {displayName}</div>
          ) : (
            <div>
              <Link onClick={() => setActive(false)} to="login">
                Sign in
              </Link>
              |
              <Link onClick={() => setActive(false)} to="signup">
                Register
              </Link>
            </div>
          )}
        </div>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          rotation={180}
          onClick={() => setActive(false)}
          className=" absolute right-4 top-7"
        />
      </div>
      <div className="h-full px-3 py-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              onClick={() => setActive(false)}
              to="/"
              className="flex items-center p-2 rounded-lg hover:bg-slate-100  "
            >
              <FontAwesomeIcon icon={faHouse} className="text-gray-400" />
              <span className="ml-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setActive(false)}
              to="/AllCategory/AllProducts"
              className="flex items-center p-2 rounded-lg hover:bg-gray-100  "
            >
              <FontAwesomeIcon icon={faList} className="text-gray-400" />
              <span className="flex-1 ml-3 whitespace-nowrap">Categories</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setActive(false)}
              to="Saved"
              className="flex items-center p-2 rounded-lg hover:bg-gray-100  "
            >
              <FontAwesomeIcon icon={faHeart} className="text-gray-400" />
              <span className="flex-1 ml-3 whitespace-nowrap">Saved</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {savedProducts ? savedProducts.length : 0}
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setActive(false)}
              to="MyCart"
              className="flex items-center p-2 rounded-lg hover:bg-gray-100  "
            >
              <FontAwesomeIcon icon={faStore} className="text-gray-400" />
              <span className="flex-1 ml-3 whitespace-nowrap">My Cart</span>
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {CartProducts ? CartProducts.length : 0}
              </span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 ">
          <li>
            <Link
              onClick={() => setActive(false)}
              to="soon"
              className="flex items-center p-2   transition duration-75 rounded-lg hover:bg-gray-100     group"
            >
              <FontAwesomeIcon icon={faGlobe} className="text-gray-400" />
              <span className="ml-4">English | USD</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setActive(false)}
              to="Contact"
              className="flex items-center p-2   transition duration-75 rounded-lg hover:bg-gray-100     group"
            >
              <FontAwesomeIcon icon={faHeadset} className="text-gray-400" />
              <span className="ml-3">Contact us</span>
            </Link>
          </li>
          <li>
            <a
              onClick={() => setActive(false)}
              target="_blank"
              href="/https://youssefzaki00.github.io/My-Portfolio/"
              className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 group"
            >
              <FontAwesomeIcon icon={faCity} className="text-gray-400" />
              <span className="ml-3">About</span>
            </a>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 ">
          <li>
            <a
              onClick={() => setActive(false)}
              href="/#"
              className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 group"
            >
              <span className="ml-3">User agreement</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => setActive(false)}
              href="/#"
              className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 group"
            >
              <span className="ml-3">Partnership</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => setActive(false)}
              href="/#"
              className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 group"
            >
              <span className="ml-3">Privacy policy</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
