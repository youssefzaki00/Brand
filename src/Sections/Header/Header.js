import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../Components/Sidebar.js";
import Actions from "../../Components/Actions.js";
import Searchbar from "../../Components/Search/Searchbar.js";
import Searchbar2 from "../../Components/Search/Searchbar2.js";
import brandLogo from "../../imgs/Group 2.png";
import { Link } from "react-router-dom";
import { useSidebarActivation } from "../../Context/SidebarActivationContext.js";
import { auth } from "../../Firebase/firebase.js";
import { toast } from "react-toastify";

function Header() {
  const { setActive } = useSidebarActivation();

  return (
    <div className="bg-white dark:bg-zinc-800 lg:border-b border-b-gray-200 relative">
      <Sidebar />
      <header className="bg-white dark:bg-zinc-800 header flex items-center ">
        <div className="container mx-auto px-4 xl:px-16 py-4 md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center md:block">
            <div className="brand flex items-center">
              <FontAwesomeIcon
                icon={faBars}
                className="text-xl -ml-3 mr-6 block xl:hidden cursor-pointer"
                onClick={() => setActive(true)}
              />
              <Link to="/" className="flex items-center">
                <div className="icon">
                  <img src={brandLogo} alt="brand-logo" />
                </div>
                <h2 className="brand-name font-bold text-blue-400 text-2xl ml-5">
                  Brand
                </h2>
              </Link>
            </div>
            <div className="flex p-4 items-center gap-4 text-gray-500 text-xl md:hidden dark:text-white">
              <Link to={!auth.currentUser ? "/login" : "/profile"}>
                <FontAwesomeIcon
                  icon={faUser}
                  onClick={() => {
                    if (!auth.currentUser) {
                      toast.error("Please login");
                    }
                  }}
                />
              </Link>
              <Link to={!auth.currentUser ? "/login" : "/MyCart"}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  onClick={() => {
                    if (!auth.currentUser) {
                      toast.error("Please login");
                    }
                  }}
                />
              </Link>
            </div>
          </div>
          <Searchbar />
          <div className="icons flex items-center s">
            <Actions />
          </div>
        </div>
      </header>
      <Searchbar2 position1={"block"} position2={"hidden"} />
    </div>
  );
}

export default Header;
