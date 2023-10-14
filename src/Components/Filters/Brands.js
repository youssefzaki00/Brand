import React, { useEffect, useState } from 'react';
import { useCategoriesContext } from './FilterContext';

function Brands({brandsNames}) {
const initialBrands = brandsNames.map(brandName => ({ name: brandName, isChecked: false }));
const [brands, setBrands] = useState(initialBrands);
const { activeSections,removeSection, toggleSection } = useCategoriesContext();

useEffect(() => {
    const updatedBrands = brands.map(brand => ({
      ...brand,
      isChecked: activeSections.includes(brand.name)
    }));
    setBrands(updatedBrands);
  }, [activeSections]);

  const toggleCheckbox = (brand,index) => {
    const updatedBrands = [...brands];
    updatedBrands[index].isChecked = !brand.isChecked;;
    setBrands(updatedBrands);
  };

const updateActiveSections = (brand) => {
  if (brand.isChecked) {
    toggleSection(brand.name);
  } else {
    removeSection(brand.name);
  }
};
  const [showAll, setShowAll] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedLinks = showAll ? brands : brands.slice(0, 4);
  return (
    <div data-accordion="collapse" className="text-gray-500">
      <h2>
          <button
            type="button"
            className="flex items-center justify-between w-full py-2.5 text-left text-gray-400 border-t border-gray-200"
            onClick={toggleAccordion}
          >
            <span className='text-black font-semibold'>Brands</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 transition-transform transform ${
                isAccordionOpen ? 'rotate-180' : 'rotate-0'
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
      <div className={isAccordionOpen ? '' : 'hidden'}>
        <div>
          <ul className="mb-3 space-y-3">
            {displayedLinks.map((brand, index) => (
            <li key={brand.name}>
              <label className="flex items-center space-x-2 ">
                <input
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg'
                  type="checkbox"
                  checked={brand.isChecked}
                    onChange={() => {
                      toggleCheckbox(brand, index);
                      updateActiveSections(brand);
                    }}
                />
                <span className="text-black  select-none hover:text-blue-600 cursor-pointer">{brand.name}</span>
              </label>
            </li>
          ))}
          </ul>
          {initialBrands.length > 4 && (
              <button
                className="text-blue-600 mb-2 hover:underline "
                onClick={toggleShowAll}
              >
                {showAll ? 'Show Less' : 'Show all'}
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default Brands;
