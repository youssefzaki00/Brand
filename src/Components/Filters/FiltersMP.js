import React from "react";
import Categories from "./Categories";
import Brands from "./Brands";
import Features from "./Features";
import PriceRange from "./PriceRange";
import Conditions from "./Conditions";
import Ratings from "./Ratings";

function Filters({
  categoriesNames,
  brandsNames,
  products,
  setUpdatedProducts,
  filterStatusMP,
  filterMP,
}) {
  return (
    <div
      className={` ${
        filterStatusMP ? "grid" : "hidden"
      } fixed z-20 bg-white md:hidden w-full p-4 h-full left-0 top-0 overflow-y-auto`}
    >
      <button
        class="
          text-blue-600 py-1.5 px-2.5 font-medium 
          
            rounded-md border border-gray-300 w-full 
            shadow-sm text-sm my-1 bg-white
            hover:bg-blue-600 hover:text-white
            transition-all duration-500"
        onClick={filterMP}
      >
        Filters
      </button>
      <Categories categoriesNames={categoriesNames} />
      {brandsNames.length > 0 && <Brands brandsNames={brandsNames} />}

      <Features />
      <PriceRange products={products} setUpdatedProducts={setUpdatedProducts} />
      <Conditions />
      <Ratings />
    </div>
  );
}

export default Filters;
