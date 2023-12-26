import React from "react";
import c1 from "../../../imgs/Property 1=AE.png";
import c2 from "../../../imgs/Property 1=AU.png";
import c3 from "../../../imgs/Property 1=CN.png";
import c4 from "../../../imgs/Property 1=DE.png";
import c5 from "../../../imgs/Property 1=DK.png";
import c6 from "../../../imgs/Property 1=FR.png";
import c7 from "../../../imgs/Property 1=GB.png";
import c8 from "../../../imgs/Property 1=IT.png";
import c9 from "../../../imgs/Property 1=RU.png";
import c10 from "../../../imgs/Property 1=US.png";
import "./Suppliers.css";
import { Link } from "react-router-dom";
function Suppliers() {
  const countryData = [
    { name: "UAE", img: c1 },
    { name: "Australia", img: c2 },
    { name: "China", img: c3 },
    { name: "Germany", img: c4 },
    { name: "Denmark", img: c5 },
    { name: "France", img: c6 },
    { name: "UK", img: c7 },
    { name: "Italy", img: c8 },
    { name: "Russia", img: c9 },
    { name: "US", img: c10 },
  ];
  return (
    <div className="container mx-auto px-6 xl:px-14 mt-4 ">
      <h2 className="suppliers-title font-semibold text-2xl py-4">
        Suppliers by region
      </h2>
      <div className="countries grid grid-cols-2 xl:grid-cols-5 gap-4 xl:gap-4">
        {countryData.map((country) => {
          return (
            <div className="country flex items-center" key={country.img}>
              <img src={country.img} alt="" className=" h-6 w-8" />
              <Link to="/" className="country-details flex flex-col ml-3">
                <h4>{country.name}</h4>
                <span className=" text-xs text-slate-400">Brand.com</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Suppliers;
