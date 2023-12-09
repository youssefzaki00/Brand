import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { useProductContext } from '../ProductChosen';
import { Link, useParams } from "react-router-dom";

function Tags() {
  // const { chosenProduct,setChosenProduct } = useProductContext();
  const { category, name } = useParams();
  return (
    <div className="tags flex  gap-2 items-center mb-4 text-xs">
      <Link to="/" className="hover:text-blue-800 text-blue-500">
        Home
      </Link>
      <FontAwesomeIcon icon={faAngleRight} className="" />
      <Link
        to="/AllCategory/AllProducts"
        className="hover:text-red-800 text-red-500"
      >
        All Products
      </Link>
      {category && (
        <>
          <FontAwesomeIcon icon={faAngleRight} />
          <button className="hover:text-green-800 text-green-500 cursor-pointer">
            {category}
          </button>
          <FontAwesomeIcon icon={faAngleRight} className="" />
          <button className="hover:text-yellow-800 text-yellow-500 cursor-pointer">
            {name}
          </button>
        </>
      )}
    </div>
  );
}

export default Tags;
