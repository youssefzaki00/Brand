import React, { useEffect, useState } from "react";
import "./Navbar.css";
import DropDown from "../Components/DropDown";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSidebarActivation } from "../SidebarActivationContext";

function Navbar() {
  const { setActive } = useSidebarActivation();
  const [theme, setTheme] = useState("light");
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
  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("light");
    }
    localStorage.setItem("theme", theme);
  };
  useEffect(() => {
    const prevTheme = localStorage.getItem("theme");
    document.documentElement.classList.remove(prevTheme);
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <nav className="bg-white dark:bg-zinc-800 dark:text-white mb-3 hidden xl:block dark:border-none">
      <div className="container mx-auto px-16 flex items-center justify-between">
        <ul className="nav-list flex items-center px-1 py-1 justify-between">
          <li>
            <FontAwesomeIcon
              onClick={() => setActive(true)}
              icon={faBars}
              className="bar cursor-pointer p-2 -ml-4 text-base flex items-center justify-center"
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
        <div className="country flex gap-2">
          <DropDown names={Currency} />
          <DropDown names={Language} />
          <button
            className="w-9 h-9 p-2 flex items-center justify-center shadow-sm rounded-full bg-slate-100 hover:bg-slate-300"
            onClick={toggleDarkMode}
          >
            {localStorage.getItem("theme") === "light" ? (
              <FontAwesomeIcon icon={faSun} style={{ color: "#ffba00" }} />
            ) : (
              <FontAwesomeIcon icon={faMoon} style={{ color: "#23272e" }} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
