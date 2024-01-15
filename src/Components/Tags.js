import React, { useEffect, useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Tags() {
  let location = useLocation();
  const [pathName, setPathName] = useState(["Home"]); // initialize with "Home"

  useEffect(() => {
    setPathName(location.pathname.split("/").filter(Boolean));
  }, [location]);

  return (
    <div className="tags flex gap-2 items-center mb-4 text-sm">
      <Link
        to="/"
        className="hover:text-gray-800 text-gray-600 hover:font-bold "
      >
        Home
      </Link>
      {pathName.map((path, index) => (
        <React.Fragment key={index}>
          <FontAwesomeIcon icon={faAngleRight} className="" />
          <button className="hover:text-gray-800 text-gray-600 cursor-pointer hover:font-bold">
            {path.replace("%20", " ")}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Tags;
