import React, { useState } from 'react'
import { useCategoriesContext } from './FilterContext'; // Adjust the path

function Categories({ categoriesNames }) {
  const [showAll, setShowAll] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const { activeSections, toggleSection } = useCategoriesContext();

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const handleCategory = (title) => {
    toggleSection(title);
  };

  const displayedLinks = showAll ? categoriesNames : categoriesNames.slice(0, 4);
  return (
    <div
        data-accordion="collapse"
        className="text-gray-500 "
      >
        <h2>
          <button
            type="button"
            className="flex items-center justify-between w-full py-2.5 text-left text-gray-400 border-t border-gray-200"
            onClick={toggleAccordion}
          >
            <span className='text-black dark:text-white font-semibold'>Category</span>
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
          <div className="">
            <ul className="mb-3 space-y-3 ">
              {displayedLinks.map((link) => (
              <li key={link} >
                  <button className={`${activeSections.includes(link)?'text-blue-600':'text-gray-600 dark:text-gray-300'} hover:text-blue-600 `} onClick={()=>handleCategory(link)}>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
            {categoriesNames.length > 4 && (
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
  )
}

export default Categories