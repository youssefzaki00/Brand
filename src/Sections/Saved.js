import React from "react";
import { Link } from "react-router-dom";
import { useSavedProducts } from "../SavedContext";
import { useProducts } from "../ProductsContext";
import { useCartProducts } from "../CartContext";
import { toast } from "react-toastify";

function Saved() {
  const Cells = ["Product", "Name", "Price", "Add to Cart", "Remove"];
  const { savedProducts, RemoveAll, removeProduct } = useSavedProducts();
  const { addToCart, CartProducts } = useCartProducts();
  const products = useProducts();
  const savedProductsList = products.filter((product) =>
    savedProducts.includes(product.id)
  );
  const handleRemoveProduct = (id) => {
    removeProduct(id);
    toast.error("Product is Removed successfully");
  };
  const handleAddToCart = (id) => {
    const inCart = CartProducts.includes(id);
    if (!inCart) {
      addToCart(id);
      removeProduct(id); // Remove from saved products
      toast.success("Product added to cart successfully");
    } else {
      toast.error("Product is already in the cart");
    }
  };

  return (
    <div className="Saved container mx-auto px-4 sm:px-8 md:px-16">
      <h3 className="mb-4 text-gray-800 dark:text-white font-semibold ml-1 text-xl">
        Saved products:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-zinc-800 rounded-md border border-gray-300 h-fit col-span-full">
          <div
            className={`TableHeader lg:grid  hidden lg:grid-cols-5 border-b border-b-gray-300 gap-x-10 lg:gap-x-0`}
          >
            {Cells.map((Cell) => (
              <div
                key={Cell}
                className={`text-sm px-5 py-3 font-medium text-gray-500  
            flex justify-center items-center`}
              >
                {Cell}
              </div>
            ))}
          </div>
          {savedProductsList && savedProductsList.length === 0 ? (
            <p className="text-gray-800 text-center py-6 text-xl font-medium flex items-center justify-center">
              No saved products available.
            </p>
          ) : (
            savedProductsList.map((product) => (
              <div
                className="Product py-2 border-b border-b-gray-300 grid grid-cols-2 lg:grid-cols-5 gap-x-10 lg:gap-x-0"
                key={product.id}
              >
                <div className="flex justify-center items-center ">
                  <img
                    className=" w-20 h-20 p-2 border border-gray-300 rounded-md"
                    src={product.img1}
                    alt=""
                  />
                </div>
                <h4 className="text-gray-800 dark:text-gray-300 font-medium flex justify-center items-center">
                  {product.name}
                </h4>
                <span className="text-blue-600 font-medium mr-1 text-sm flex justify-center items-center">
                  Price: ${product.price}
                </span>
                <div className="flex lg:justify-center justify-start lg:items-center">
                  <button
                    className="bg-white text-blue-600 py-1.5 px-2.5 font-medium 
                rounded-md border border-gray-300 w-fit shadow-sm text-sm h-fit hover:bg-blue-600 hover:text-white
                transition-all duration-500"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="bg-white text-red-600 py-1.5 px-2.5 font-medium 
                  rounded-md border border-gray-300 w-fit shadow-sm text-sm h-fit flex justify-center items-center hover:bg-red-600 hover:text-white
                transition-all duration-500"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="flex justify-between items-center p-4">
            <Link
              to="/AllCategory/AllProducts"
              className="button gap-1 text-white rounded-lg p-2 flex justify-center items-center  hover:text-blue-600 hover:bg-white
                transition-all duration-500 hover:border hover:border-gray-300 hoverring"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none "
                className="none"
              >
                <path d="M18.3332 10.0833H7.17734L12.3015 4.95913L10.9998 3.66663L3.6665 11L10.9998 18.3333L12.2923 17.0408L7.17734 11.9166H18.3332V10.0833Z" />
              </svg>
              Back to shop
            </Link>
            <button
              className="bg-white text-blue-600 py-1.5 px-2.5 font-medium 
            rounded-md border border-gray-300 w-fit shadow-sm hover:bg-blue-600 hover:text-white
                transition-all duration-500 "
              onClick={RemoveAll}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saved;
