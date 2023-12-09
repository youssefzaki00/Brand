import React, { useEffect, useState } from "react";
import Filters from "../Components/Filters";
import FiltersMP from "../Components/FiltersMP";
import DropDown from "../Components/DropDown";
import ListCard from "../Components/ListCard";
import GridCard from "../Components/GridCard";
import Loading from "../Components/Loading";
import PagesPagination from "../Components/PagesPagination";
import { useCategoriesContext } from "../Components/Filters/FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePriceRangeContext } from "../Components/Filters/PriceContext";
import { useProducts } from "../ProductsContext";

function AllProducts() {
  const names = [
    "Featured",
    "Best Match",
    "Recommended",
    "High Rated",
    "Cheap first",
  ];
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("Grid");
  const [verified, setVerified] = useState(true);
  const [filterStatusMP, setFilterStatusMP] = useState(false);
  const { activeSections, removeSection, addPriceRange } =
    useCategoriesContext();
  const { priceRange } = usePriceRangeContext();
  const products = useProducts();
  const filterMP = () => {
    setFilterStatusMP(!filterStatusMP);
  };
  useEffect(() => {
    let filteredProducts = [...products]; // Create a copy of the products array
    if (!products) {
      return <Loading />;
    }

    // Apply brand, category, and rate filters
    if (activeSections.length > 0) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          activeSections.includes(product.category) ||
          activeSections.includes(product.brand)
      );
    }

    // Apply price range filter if both min and max are not null
    if (priceRange.min !== null && priceRange.max !== null) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= priceRange.min && product.price <= priceRange.max
      );
      const previousPriceRange = activeSections.find((section) =>
        section.startsWith("Price from:")
      );
      if (
        !previousPriceRange ||
        previousPriceRange !==
          `Price from: ${priceRange.min} to: ${priceRange.max}`
      ) {
        addPriceRange(priceRange);
      }
    }

    setUpdatedProducts(filteredProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSections, products, priceRange]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleVerified = () => {
    setVerified(!verified);
  };
  const handleGrid = () => {
    setView("Grid");
    setCurrentPage(1);
    scrollToTop();
  };
  const handleList = () => {
    setView("List");
    setCurrentPage(1);
    scrollToTop();
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };
  const categoriesNames = [...new Set(products.map((a) => a.category))];
  const brandsNames = [...new Set(products.map((a) => a.brand))];
  const totalProducts = updatedProducts.length;
  const productsPerPage = view === "List" ? "8" : "18"; // Number of products to display per page
  const totalPages = Math.ceil(totalProducts / productsPerPage); // Calculate total pages
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = updatedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProducts = () => {
    if (updatedProducts.length > 0) {
      const CardComponent = view === "List" ? ListCard : GridCard;
      return (
        <div
          className={`grid col-span-9 grid-cols-9 gap-4 ${
            CardComponent === ListCard ? "" : "col-span-9"
          }`}
        >
          {currentProducts.map((product, i) => (
            <CardComponent key={i} product={product} />
          ))}
        </div>
      );
    } else {
      if (updatedProducts.length === 0) {
        return (
          <div className="col-span-9 text-center text-xl font-semibold text-gray-800 ">
            No Products Found ¯\_(ツ)_/¯{" "}
          </div>
        );
      } else {
        return (
          <div className="col-span-9">
            <Loading />
          </div>
        );
      }
    }
  };

  return (
    <div className="relative">
      <button
        class="
          text-blue-600 py-1.5 px-2.5 font-medium block lg:hidden
          
            rounded-md border border-gray-300 w-full 
            shadow-sm text-sm my-1 bg-white
            hover:bg-blue-600 hover:text-white
            transition-all duration-500"
        onClick={filterMP}
      >
        Filters
      </button>
      <div className="grid grid-cols-12 gap-4 col-span-12 justify-center ">
        <Filters
          categoriesNames={categoriesNames}
          brandsNames={brandsNames}
          products={products}
          setUpdatedProducts={setUpdatedProducts}
        />

        <FiltersMP
          categoriesNames={categoriesNames}
          brandsNames={brandsNames}
          products={products}
          setUpdatedProducts={setUpdatedProducts}
          filterStatusMP={filterStatusMP}
          setFilterStatusMP={setFilterStatusMP}
          filterMP={filterMP}
        />
        <div className="col-span-12 md:col-span-9 lg:col-span-9 grid-cols-9">
          <nav className="hidden lg:flex lg:col-span-9 bg-white rounded-md border border-gray-300 py-2 px-4  flex-col md:flex-row justify-between mb-4">
            <div className="flex items-center gap-1 ">
              {totalProducts} items in
              <span className="text-blue-600 font-semibold ">All Products</span>
            </div>
            <div className="flex items-center gap-6 ">
              <div className="flex items-center select-none">
                <input
                  checked={verified}
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  onChange={() => handleVerified()}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded-lg p-2 border-gray-300"
                />
                <label
                  htmlFor="checked-checkbox"
                  className=" select-none ml-2 text-sm font-medium text-gray-900 "
                >
                  Verified Only
                </label>
              </div>
              <div className="border border-gray-300 rounded-md ">
                <DropDown names={names} />
              </div>
              <div className="border border-gray-300 rounded-md flex items-center ">
                <div
                  className={`border-r border-r-gray-300 p-1.5 cursor-pointer ${
                    view === "Grid" ? "bg-slate-200" : ""
                  }`}
                  onClick={handleGrid}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M11 3H3V11H11V3Z" fill="#1C1C1C" />
                    <path d="M11 13H3V21H11V13Z" fill="#1C1C1C" />
                    <path d="M21 3H13V11H21V3Z" fill="#1C1C1C" />
                    <path d="M21 13H13V21H21V13Z" fill="#1C1C1C" />
                  </svg>
                </div>
                <div
                  className={`p-1.5 cursor-pointer ${
                    view === "Grid" ? "" : "bg-slate-200"
                  } `}
                  onClick={handleList}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </nav>
          {activeSections.length > 0 && (
            <div className="col-span-9  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {activeSections.map((section, i) => (
                <div
                  key={i}
                  className="col-span-1 flex bg-white rounded-md border shadow-sm border-blue-600
                  mr-4 mb-4 py-1 px-2 text-center items-center justify-between"
                >
                  <span className="text-black font-medium text-sm">
                    {section}
                  </span>
                  <span
                    className="text-gray-600 cursor-pointer w-4"
                    onClick={() => removeSection(section)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </div>
              ))}
            </div>
          )}
          {renderProducts()}
          <PagesPagination
            className="col-span-12"
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
