import React from "react";
import ItemCard from "../../../Components/Products/ItemCard";

function Recommended() {
  return (
    <div className="container mx-auto xl:px-14">
      <h2 className="p-2 text-2xl font-medium">Recommended items</h2>
      <div className=" recommended-section grid-cols-4 grid xl:grid-cols-10 gap-2 xl:gap-4">
        <ItemCard />
      </div>
    </div>
  );
}

export default Recommended;
