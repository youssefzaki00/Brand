import React from "react";
import "./InquirySection.css";
import "../MainSection/MainSection.css";
import DropDown from "../../../Components/DropDown/DropDown.js";

function InquirySection() {
  return (
    <div className="container mx-auto rounded p-0 xl:px-14 mt-2 mb-4 lg:mt-4 lg:mb-4 ">
      <div className="InquirySection p-8 rounded-lg lg:p-8 flex flex-col xl:flex-row justify-between min-h-[220px]">
        <div className="inquiry-text relative z-10">
          <h2 className="pb-2  text-white font-semibold text-3xl">
            An easy way to send<br></br> requests to all suppliers
          </h2>
          <span className="hidden xl:block text-xs text-white font-light">
            You can just order any thing available with any quantity you want
            <br></br> shipped to your place.
          </span>
        </div>
        <div className="send-inquiry hidden xl:block rounded bg-white dark:bg-zinc-800 relative z-10  p-4 w-5/12 h-80 ">
          <h3 className=" text-xl font-semibold mb-4">
            Send quote to suppliers
          </h3>
          <input
            type="text"
            id="order-item"
            className="block p-2 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 placeholder:text-black placeholder:font-medium mb-4 focus:ring-gray-200 focus:border-gray-200"
            placeholder="what item you need?"
          />

          <textarea
            id="order-details"
            rows="3"
            className="block p-2.5 mb-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200"
            placeholder="Type more details"
          ></textarea>
          <div className="Quantity flex justify-start">
            <input
              type="number"
              id="order-item"
              className="block p-2.5 w-6/12 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 placeholder:text-black placeholder:font-medium mb-3 focus:ring-gray-200 focus:border-gray-200 mr-2"
              placeholder="Quantity"
            ></input>
            <DropDown names={["Pcs", "Kgs", "Litres"]} />
          </div>
          <input
            type="submit"
            value={"Send inquiry"}
            className=" user-join rounded-md mb-2 py-1.5 px-2.5 bg-blue-600 text-white text-md button"
          />
        </div>
        <input
          type="submit"
          value={"Send inquiry"}
          className="block xl:hidden relative z-20 user-join rounded-md mb-2 py-1.5 px-2.5 bg-blue-600 text-white text-md  w-fit button-inquiry mt-2"
        />
      </div>
    </div>
  );
}

export default InquirySection;
