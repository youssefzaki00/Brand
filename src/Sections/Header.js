import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Components/Sidebar.js";
import Actions from "../Components/Actions.js";
import Searchbar from "../Components/Searchbar.js";
import Searchbar2 from "../Components/Searchbar2";
import brandLogo from "../imgs/Group 2.png";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-white lg:border-b border-b-gray-200">
      <Sidebar active={active} setActive={setActive} />
      <header className="bg-white header flex items-center">
        <div className="container mx-auto px-4 xl:px-14 py-4 md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center md:block">
            <div className="brand ml-3 flex items-center">
              <FontAwesomeIcon
                icon={faBars}
                className="text-xl -ml-3 mr-6 block xl:hidden cursor-pointer"
                onClick={() => {
                  setActive(active ? "false" : "true");
                }}
              />
              <Link to="/" className="flex items-center">
                <div className="icon">
                  <img src={brandLogo} alt="brand-logo" />
                </div>
                <h2 className="brand-name font-bold text-blue-400 text-2xl ml-5">
                  Branding
                </h2>
              </Link>
            </div>
            <div className="flex p-4 items-center gap-4 text-gray-500 text-xl md:hidden">
              <Link to="Profile">
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link to="MyCart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </div>
          </div>
          <Searchbar />
          <div className="icons flex items-center -mr-3">
            <Actions />
          </div>
        </div>
      </header>
      <Searchbar2 position1={"block"} position2={"hidden"} />
    </div>
  );
}

export default Header;
