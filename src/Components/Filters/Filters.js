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
}) {
  return (
    <div className=" hidden lg:grid lg:col-span-3 h-0">
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
