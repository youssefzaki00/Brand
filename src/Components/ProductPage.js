import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import db from "../Firebase/firebase";
import Loading from "./Loader/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import c4 from "../imgs/Property 1=DE.png";
import { useSavedProducts } from "../Context/SavedContext";
import { toast } from "react-toastify";
import { useCartProducts } from "../Context/CartContext";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handelChosenProduct = (id, name, category) => {
    navigate(`/AllCategory/${category}/${name}/${id}`);
    scrollToTop();
  };
  // fetch Products data
  useEffect(() => {
    const fetchData = async () => {
      const productRef = collection(db, "Products");
      const querySnapshot = await getDocs(productRef);
      const Data = querySnapshot.docs.map((doc) => doc.data());
      setProducts(Data);
      const q = query(productRef, where("id", "==", id));
      try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const productData = querySnapshot.docs[0].data();
          setProduct(productData);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error getting product:", error);
      } finally {
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    if (product !== null && products !== null) {
      const filtered = products.filter((p) => p.category === product.category);
      setFilteredProducts(filtered);
    }
  }, [products, product]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const { savedProducts, addProduct, removeProduct } = useSavedProducts();
  const isSaved = product && savedProducts.includes(product.id);
  const handleSaveClick = () => {
    if (isSaved) {
      removeProduct(product.id);
      toast.error("Product Removed successfully");
    } else {
      addProduct(product.id);
      toast.success("Product Saved successfully");
    }
  };
  const { addToCart, CartProducts } = useCartProducts();

  const inCart = CartProducts.includes(id);
  const handleAddToCart = () => {
    if (!inCart) {
      addToCart(id);
      removeProduct(id); // Remove from saved products
      toast.success("Product added to cart successfully");
    } else {
      toast.error("Product is already in the cart");
    }
  };

  if (!product) {
    return <Loading />;
  }
  return (
    <>
      <div className="bg-white dark:bg-zinc-800 p-4 rounded-md lg:grid grid-cols-1 lg:grid-cols-12 gap-4 border border-gray-300 ">
        <div className="col-span-2 lg:col-span-4 grid grid-cols-4 h-fit ">
          <div className=" border border-gray-300 rounded-md p-4 col-span-4 mb-4 w-full flex items-center justify-center cursor-pointer h-80 ">
            <img
              src={product.img1}
              alt=""
              className="p-4 h-full object-contain"
            />
          </div>
          <div className="grid col-span-4 grid-cols-4 gap-4 w-full  ">
            <div className="h-16 w-full">
              <img
                src={product.img1}
                alt=""
                className="border border-gray-300 rounded-md p-2 cursor-pointer object-contain h-full"
              />
            </div>
            <div className="h-16">
              <img
                src={product.img2}
                alt=""
                className="border border-gray-300 rounded-md p-2 cursor-pointer object-contain h-full"
              />
            </div>
            <div className="h-16">
              <img
                src={product.img3}
                alt=""
                className="border border-gray-300 rounded-md p-2 cursor-pointer object-contain h-full"
              />
            </div>
            <div className="h-16">
              <img
                src={product.img4}
                alt=""
                className="border border-gray-300 rounded-md p-2 cursor-pointer object-contain h-full"
              />
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <span className="text-green-500 text-lg">
            <FontAwesomeIcon icon={faCheck} /> In stock
          </span>
          <div className="text-xl font-semibold text-slate-950 dark:text-white my-2">
            {product.name}
          </div>
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <div>
              <span className="text-black select-none hover:text-blue-600 cursor-pointer text-xs">
                {[...Array(5)].map((_, starIndex) => (
                  <FontAwesomeIcon
                    key={starIndex}
                    icon={faStar}
                    className={`${
                      starIndex < product.rating
                        ? "text-orange-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </span>
              <span className="text-orange-400 ml-2">
                {product.rating > 0 ? product.rating : "0"}
              </span>
            </div>
            <span className="w-2 h-2 rounded-full bg-gray-200 ml-3"></span>
            <div className="flex gap-1 items-center text-gray-400 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.33317 3.33329H16.6665V13.3333H4.30817L3.33317 14.3083V3.33329ZM3.33317 1.66663C2.4165 1.66663 1.67484 2.41663 1.67484 3.33329L1.6665 18.3333L4.99984 15H16.6665C17.5832 15 18.3332 14.25 18.3332 13.3333V3.33329C18.3332 2.41663 17.5832 1.66663 16.6665 1.66663H3.33317ZM4.99984 9.99996H14.9998V11.6666H4.99984V9.99996ZM4.99984 7.49996H14.9998V9.16663H4.99984V7.49996ZM4.99984 4.99996H14.9998V6.66663H4.99984V4.99996Z"
                  fill="#8B96A5"
                />
              </svg>{" "}
              32 reviews
            </div>
            <span className="w-2 h-2 rounded-full bg-gray-200 ml-3"></span>
            <div className="flex gap-1 items-center text-gray-400 dark:text-white">
              <FontAwesomeIcon icon={faBasketShopping} />
              154 sold
            </div>
          </div>
          <div className="bg-orange-200 shadow-sm mt-4 flex items-center justify-between p-4 ">
            <div className=" ">
              <div className="text-red-600 text-xs lg:text-xl mb-2 font-semibold">
                ${product.price}.00
              </div>
              <span className="text-gray-500 text-xs lg:text-base">
                50-100 pcs
              </span>
            </div>
            <div className=" ">
              <div className="text-slate-950 text-xs lg:text-xl mb-2 font-semibold">
                ${((product.price / 100) * 90).toFixed(0)}.00
              </div>
              <span className="text-gray-500 text-xs lg:text-base">
                100-700 pcs
              </span>
            </div>
            <div className="">
              <div className="text-slate-950 text-xs lg:text-xl mb-2 font-semibold">
                ${((product.price / 100) * 75).toFixed(0)}.00
              </div>
              <span className="text-gray-500 text-xs lg:text-base">
                +700 pcs
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-b border-b-gray-300 py-4  flex">
              <span className="text-gray-400 dark:text-white">Price:</span>
              <span className=" text-blue-600 text-lg font-semibold w-full text-center">
                ${product.price}
              </span>
            </div>
            <div className="border-b border-b-gray-300 py-4 ">
              <div className="py-2 flex">
                <span className="text-gray-400 dark:text-white">category:</span>
                <span className=" text-gray-700 dark:text-gray-300 w-full text-center ">
                  {product.category}
                </span>
              </div>
              <div className="py-2 flex">
                <span className="text-gray-400 dark:text-white">
                  Material:{" "}
                </span>
                <span className=" text-gray-700 dark:text-gray-300  w-full text-center ">
                  unknown
                </span>
              </div>
              <div className="py-2 flex">
                <span className="text-gray-400 dark:text-white">Design:</span>
                <span className=" text-gray-700 dark:text-gray-300 w-full text-center ">
                  Modern
                </span>
              </div>
            </div>
            <div className=" py-4 ">
              <div className="py-2 flex">
                <span className="text-gray-400 dark:text-white">
                  Customization:
                </span>
                <span className=" text-gray-700 dark:text-gray-300  w-full text-center  text-sm">
                  Customized design
                </span>
              </div>
              <div className="py-2 flex">
                <span className="text-gray-400 dark:text-white">
                  Protection:
                </span>
                <span className=" text-gray-700 dark:text-gray-300  w-full text-center ">
                  Refund Policy
                </span>
              </div>
              <div className="py-2 flex">
                <span className="text-gray-400 dark:text-white">Warranty:</span>
                <span className=" text-gray-700 dark:text-gray-300  w-full text-center ">
                  2 years full warranty{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="py-5 bg-white dark:bg-zinc-800 rounded-lg px-3 mb-4 border shadow-sm border-gray-300 ">
            <div className="flex items-center border-b border-b-gray-300 pb-4">
              <div className="text-3xl text-green-600 bg-emerald-200 font-bold rounded p-2 px-4 mr-4">
                R
              </div>
              <div className="flex flex-col gap-1">
                <span>Supplier</span>
                <span>Guanjoi Trading LLC</span>
              </div>
            </div>
            <div className="flex mt-4 items-center">
              <img src={c4} alt="Germany" className="w-6" />
              <span className="ml-4 text-gray-400 dark:text-white">
                Germany, Berlin
              </span>
            </div>
            <div className="flex mt-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM15.8333 9.16671C15.8333 12.9334 13.35 16.4084 10 17.4417C6.65 16.4084 4.16667 12.9334 4.16667 9.16671V5.25004L10 2.65837L15.8333 5.25004V9.16671ZM6.175 9.65837L5 10.8334L8.33333 14.1667L15 7.50004L13.825 6.31671L8.33333 11.8084L6.175 9.65837Z"
                  fill="#8B96A5"
                />
              </svg>
              <span className="ml-6 text-gray-400 dark:text-white">
                Verified Seller
              </span>
            </div>
            <div className="flex mt-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.9915 1.66663C5.3915 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.3915 18.3333 9.9915 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 5.39996 14.5998 1.66663 9.9915 1.66663ZM15.7665 6.66663H13.3082C13.0415 5.62496 12.6582 4.62496 12.1582 3.69996C13.6915 4.22496 14.9665 5.29163 15.7665 6.66663ZM9.99984 3.36663C10.6915 4.36663 11.2332 5.47496 11.5915 6.66663H8.40817C8.7665 5.47496 9.30817 4.36663 9.99984 3.36663ZM3.54984 11.6666C3.4165 11.1333 3.33317 10.575 3.33317 9.99996C3.33317 9.42496 3.4165 8.86663 3.54984 8.33329H6.3665C6.29984 8.88329 6.24984 9.43329 6.24984 9.99996C6.24984 10.5666 6.29984 11.1166 6.3665 11.6666H3.54984ZM4.23317 13.3333H6.6915C6.95817 14.375 7.3415 15.375 7.8415 16.3C6.30817 15.775 5.03317 14.7166 4.23317 13.3333ZM6.6915 6.66663H4.23317C5.03317 5.28329 6.30817 4.22496 7.8415 3.69996C7.3415 4.62496 6.95817 5.62496 6.6915 6.66663ZM9.99984 16.6333C9.30817 15.6333 8.7665 14.525 8.40817 13.3333H11.5915C11.2332 14.525 10.6915 15.6333 9.99984 16.6333ZM11.9498 11.6666H8.04984C7.97484 11.1166 7.9165 10.5666 7.9165 9.99996C7.9165 9.43329 7.97484 8.87496 8.04984 8.33329H11.9498C12.0248 8.87496 12.0832 9.43329 12.0832 9.99996C12.0832 10.5666 12.0248 11.1166 11.9498 11.6666ZM12.1582 16.3C12.6582 15.375 13.0415 14.375 13.3082 13.3333H15.7665C14.9665 14.7083 13.6915 15.775 12.1582 16.3ZM13.6332 11.6666C13.6998 11.1166 13.7498 10.5666 13.7498 9.99996C13.7498 9.43329 13.6998 8.88329 13.6332 8.33329H16.4498C16.5832 8.86663 16.6665 9.42496 16.6665 9.99996C16.6665 10.575 16.5832 11.1333 16.4498 11.6666H13.6332Z"
                  fill="#8B96A5"
                />
              </svg>
              <span className="ml-6 text-gray-400 dark:text-white">
                Worldwide shipping
              </span>
            </div>
            <div className="rounded-md mb-2 py-1.5 bg-blue-600 hover:bg-blue-700  text-white text-md button text-center mt-4 transition-all duration-300 hover:shadow ">
              Send inquiry
            </div>
            <div className="bg-white py-1.5 rounded-md text-md cursor-pointer hover:text-blue-800 hover:shadow text-center font-medium text-blue-600 border border-gray-300 transition-all duration-300 ">
              Seller’s profile
            </div>
          </div>
          <div
            className="flex justify-center transition-all duration-300 text-blue-600 mt-8 cursor-pointer text-md font-medium items-center gap-1 border border-gray-300  py-1.5 rounded-md hover:text-blue-800 hover:shadow"
            onClick={handleSaveClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.5 2.82495C14.76 2.82495 13.09 3.63495 12 4.91495C10.91 3.63495 9.24 2.82495 7.5 2.82495C4.42 2.82495 2 5.24495 2 8.32495C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32495C22 5.24495 19.58 2.82495 16.5 2.82495ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32495C4 6.32495 5.5 4.82495 7.5 4.82495C9.04 4.82495 10.54 5.81495 11.07 7.18495H12.94C13.46 5.81495 14.96 4.82495 16.5 4.82495C18.5 4.82495 20 6.32495 20 8.32495C20 11.215 16.86 14.065 12.1 18.375Z"
                fill="#0D6EFD"
              />
            </svg>
            {isSaved ? "Remove from Saved" : "Save for Later"}
          </div>
          {inCart ? (
            <Link
              to="/MyCart"
              className="rounded-md  py-1.5 bg-white border border-gray-300  text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300  text-md cursor-pointer text-center mt-4 flex items-center  justify-center hover:shadow font-medium  "
              onClick={handleAddToCart}
            >
              Go to Cart
            </Link>
          ) : (
            <div
              className="rounded-md  py-1.5 bg-blue-600 hover:text-blue-600 hover:bg-white transition-all 
        duration-300 text-white text-md button text-center mt-4 flex items-center cursor-pointer justify-center hover:shadow hover:border hover:border-gray-300 "
              onClick={handleAddToCart}
            >
              Add to Cart
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 md:col-span-9 bg-white dark:bg-zinc-800 p-4 rounded-md border border-gray-300 shadow-sm ">
          <div className="flex gap-2.5 lg:gap-8 text-xs lg:text-base text-center border-b border-b-gray-400 rounded-md rounded-s-none rounded-e-none">
            <span className="text-blue-600 activeOrder pb-2 mb-2 text-xs lg:text-base w-fit px-2 lg:px-4 cursor-pointer">
              Description
            </span>
            <span className="text-gray-400 dark:text-white cursor-pointer">
              Reviews
            </span>
            <span className="text-gray-400 dark:text-white cursor-pointer">
              Shipping
            </span>
            <span className="text-gray-400 dark:text-white cursor-pointer">
              About
            </span>
          </div>
          <div className="m-4 mb-8 text-gray-600 dark:text-gray-300">
            {product.description} With supporting text below as a natural
            lead-in to additional content. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <div className="flex gap-10">
            <div className="mx-4 flex gap-4 flex-col">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                <span className="text-green-600">✔</span> Modern style and
                design
              </span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                <span className="text-green-600">✔</span> Premium Quality
              </span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                <span className="text-green-600">✔</span> Easy fast and ver good
              </span>
            </div>
            <div className="mx-4 flex gap-4 flex-col">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                <span className="text-green-600">✔</span> Adaptable Design
              </span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                <span className="text-green-600">✔</span> Premium Quality
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 bg-white dark:bg-zinc-800 p-4 rounded-md border border-gray-300 shadow-sm h-fit mt-4 md:mt-0">
          <span className=" text-gray-800 dark:text-gray-300  text-lg font-semibold">
            Related Products
          </span>
          {filteredProducts &&
            shuffleArray(filteredProducts)
              .slice(0, 4)
              .map((RelatedProduct) => (
                <div className="flex gap-4 mt-4 " key={RelatedProduct.id}>
                  <div
                    className="border border-gray-300 p-2 col-span-1 rounded flex items-center justify-center cursor-pointer w-20 h-16"
                    onClick={() =>
                      handelChosenProduct(
                        RelatedProduct.id,
                        RelatedProduct.name,
                        RelatedProduct.category
                      )
                    }
                  >
                    <img
                      src={RelatedProduct.img1}
                      className=" h-full w-fit object-contain cursor-pointer "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1 col-span-2">
                    <p
                      className=" text-gray-800 dark:text-gray-300  text-sm font-medium hover:text-blue-600 cursor-pointer "
                      onClick={() =>
                        handelChosenProduct(
                          RelatedProduct.id,
                          RelatedProduct.name,
                          RelatedProduct.category
                        )
                      }
                    >
                      {RelatedProduct.name}
                    </p>
                    <span className="text-gray-500 text-sm font-medium">
                      ${RelatedProduct.price}.00
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-800 py-4 px-8 rounded-md border border-gray-300 flex flex-col gap-4 mt-4">
        <span className=" text-gray-800  dark:text-white text-lg font-semibold">
          You may like:
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
          {products &&
            shuffleArray(products)
              .slice(0, 5)
              .map((RelatedProduct) => (
                <div className="flex flex-col gap-4" key={RelatedProduct.id}>
                  <div className=" rounded cursor-pointer p-4 border border-gray-300 flex items-center justify-center h-40 ">
                    <img
                      src={RelatedProduct.img1}
                      className=" h-full  w-full object-contain p-2 cursor-pointer"
                      alt=""
                      onClick={() =>
                        handelChosenProduct(
                          RelatedProduct.id,
                          RelatedProduct.name,
                          RelatedProduct.category
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <span
                      className=" text-gray-800 dark:text-gray-300 text-sm font-medium hover:text-blue-600 cursor-pointer"
                      onClick={() =>
                        handelChosenProduct(
                          RelatedProduct.id,
                          RelatedProduct.name,
                          RelatedProduct.category
                        )
                      }
                    >
                      {RelatedProduct.name.slice(0, 18)}...
                    </span>
                    <span className="text-gray-500 text-sm font-medium">
                      ${RelatedProduct.price}.00
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
