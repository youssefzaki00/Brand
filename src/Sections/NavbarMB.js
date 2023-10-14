import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../ProductsContext";

function NavbarMB() {
  const products = useProducts();
  const categoriesNames = [...new Set(products.map((a) => a.category))];

  const category = [
    "All Categories",
    "interiors",
    "tech",
    "Tools",
    "equipments",
    "Sports",
    "pets",
    "More category",
  ];
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categoriesNames);
  }, []);
  return (
    <div className="bg-white w-full overflow-x-auto">
      <div className="flex xl:hidden bg-white container mx-auto px-4 py-6">
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
