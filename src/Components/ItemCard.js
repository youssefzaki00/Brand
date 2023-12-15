import React from "react";
import { useNavigate } from "react-router";
import { useProducts } from "../ProductsContext";
import Loading from "./Loading";
function ItemCard() {
  const products = useProducts();
  const filteredProducts = products.filter(
    (product) =>
      product.category === "Men clothes" ||
      product.category === "Phones" ||
      product.category === "Gaming"
  );
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handelChosenProduct = (id, name, category) => {
    navigate(`/AllCategory/${category}/${name}/${id}`);
    scrollToTop();
  };
  if (!filteredProducts) {
    return <Loading />;
  }
  return (
    <>
      {filteredProducts.slice(0, 10).map((product) => {
        return (
          <div
            key={product.id}
            className="item-card col-span-2 rounded border border-gray-200 flex flex-col justify-between p-4 bg-white dark:bg-zinc-800 max-h-96 cursor-pointer duration-300 transition-translate hover:shadow hover:-translate-y-2"
            onClick={() =>
              handelChosenProduct(product.id, product.name, product.category)
            }
          >
            <div className="card-img flex justify-center p-2">
              <img src={product.img1} alt="" className="h-28" />
            </div>
            <div className="card-details flex flex-col">
              <h4 className=" text-lg font-medium  mb-1">${product.price}</h4>
              <span className=" text-gray-400 text-xs">
                {product.name.slice(0, 22)}-
                {product.category === "women's clothing"
                  ? "for women"
                  : "for men"}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemCard;
