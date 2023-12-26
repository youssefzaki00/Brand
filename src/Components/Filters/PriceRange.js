import React, { useState } from "react";
import { usePriceRangeContext } from "../../Context/PriceContext";

function PriceRange({ products, setUpdatedProducts }) {
  const { priceRange, setPriceRange } = usePriceRangeContext();

  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [minInputValue, setMinInputValue] = useState(priceRange.min);
  const [maxInputValue, setMaxInputValue] = useState(priceRange.max);

  const handleMinChange = (event) => {
    const newMin = parseInt(event.target.value);
    setMinInputValue(newMin);
  };

  const handleMaxChange = (event) => {
    const newMax = parseInt(event.target.value);
    setMaxInputValue(newMax);
  };

  const handleApplyClick = () => {
    setPriceRange({ min: minInputValue, max: maxInputValue });
    const filteredProducts = products.filter((product) => {
      return product.price >= minInputValue && product.price <= maxInputValue;
    });
    setUpdatedProducts(filteredProducts);
  };
  // useEffect(() => {
  //   if (minInputValue !== priceRange.min || maxInputValue !== priceRange.max) {
  //     const filteredProducts = products.filter((product) => {
  //       return product.price >= minInputValue && product.price <= maxInputValue;
  //     });
  //     setUpdatedProducts(filteredProducts);
  //   }
  // }, [minInputValue, maxInputValue, priceRange, products]);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="text-gray-500 mb-4" data-accordion="collapse">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-2.5 text-left text-gray-400 border-t border-gray-200"
          onClick={toggleAccordion}
        >
          <span className="text-black dark:text-white font-semibold">
            Price Range
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform transform ${
              isAccordionOpen ? "rotate-180" : "rotate-0"
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div className={isAccordionOpen ? "" : "hidden"}>
        <div className="flex space-x-4 mt-2 items-center">
          <div className="flex flex-col">
            <label className="text-black dark:text-white ">Min</label>
            <input
              placeholder="$10"
              type="number"
              value={minInputValue}
              onChange={handleMinChange}
              className="border rounded-lg p-2 w-32"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-black dark:text-white">Max</label>
            <input
              placeholder="$1000"
              type="number"
              value={maxInputValue}
              onChange={handleMaxChange}
              className="border rounded-lg p-2 w-32"
            />
          </div>
        </div>
        <button
          className="mt-2 bg-blue-500 text-white rounded-md p-2 w-full flex justify-center button"
          onClick={handleApplyClick}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default PriceRange;
