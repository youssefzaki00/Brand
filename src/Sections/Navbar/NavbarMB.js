import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../Context/ProductsContext.js";

function NavbarMB() {
  const products = useProducts();
  const categoriesNames = [...new Set(products.map((a) => a.category))];

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categoriesNames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(categories);
  return (
    <div className="bg-white dark:bg-zinc-800 w-full overflow-x-auto xl:hidden mb-4">
      <div className="flex  bg-white dark:bg-zinc-800 container mx-auto px-4 py-2">
        {categories.map((category) => {
          return (
            <Link
              to="AllCategory"
              key={category}
              className="bg-gray-50 text-blue-600 
              border border-gray-200
          focus:outline-none
        rounded-md text-sm
        px-2 py-2 h-fit text-center mr-2 mb-2"
            >
              {category}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavbarMB;
