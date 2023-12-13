import React from "react";
import "./Navbar.css";
import DropDown from "../Components/DropDown";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSidebarActivation } from "../SidebarActivationContext";

function Navbar() {
  const { setActive } = useSidebarActivation();
  const Currency = ["USD", "EG", "EU"];
  const Language = [
    "English",
    "Arabic",
    "Russian",
    "Portuguese",
    "Spanish",
    "Italian",
    "German ",
    " French",
  ];
  return (
    <nav className="bg-white mb-3 hidden xl:block">
      <div className="container mx-auto px-14 flex items-center justify-between">
        <ul className="nav-list flex items-center px-1 py-1 justify-between">
          <li>
            <FontAwesomeIcon
              onClick={() => setActive(true)}
              icon={faBars}
              className="bar cursor-pointer p-2 -mr-2 flex items-center justify-center"
            />
          </li>
          <li>
            <Link to="/AllCategory/AllProducts">All category</Link>
          </li>
          <li>
            <Link to="/HotOffers">Hot offers</Link>
          </li>
          <li>
            <Link to="/GiftBoxes">Gift boxes</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/MenuItems">Menu items </Link>
          </li>
          <li>
            <DropDown names={["Help", "Contact", "Info"]} />
          </li>
        </ul>
        <div className="country">
          <DropDown names={Currency} />
          <DropDown names={Language} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
