import React, { useEffect, useState } from 'react';
import { useCategoriesContext } from "../../Context/FilterContext";

function Conditions() {
  const initialConditions = [
    { name: 'Any', isChecked: false },
    { name: 'Refurbished', isChecked: false },
    { name: 'Brand new', isChecked: false },
    { name: 'Old items', isChecked: false },
  ];
  const [conditions, setConditions] = useState(initialConditions);
  const { activeSections, removeSection, toggleSection } = useCategoriesContext();

  useEffect(() => {
    const updatedConditions = conditions.map(condition => ({
      ...condition,
      isChecked: activeSections.includes(condition.name)
    }));
    setConditions(updatedConditions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSections]);

  const toggleCheckbox = (index) => {
    const updatedConditions = [...conditions];
    updatedConditions[index].isChecked = !updatedConditions[index].isChecked;
    setConditions(updatedConditions);
  };

  const updateActiveSections = (condition) => {
    if (condition.isChecked) {
      toggleSection(condition.name);
    } else {
      removeSection(condition.name);
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

  const displayedLinks = showAll ? conditions : conditions.slice(0, 4);

  return (
    <div data-accordion="collapse" className="text-gray-500">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-2.5 text-left text-gray-400 border-t border-gray-200"
          onClick={toggleAccordion}
        >
          <span className="text-black dark:text-white font-semibold">Conditions</span>
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
            {displayedLinks.map((condition, index) => (
              <li key={condition.name}>
                <label className="flex items-center space-x-2 ">
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-400 border-gray-400 rounded-lg"
                    type="checkbox"
                    checked={condition.isChecked}
                    onChange={() => {
                      toggleCheckbox(index);
                      updateActiveSections(condition);
                    }}
                  />
                  <span className="text-gray-600 dark:text-gray-300 select-none hover:text-blue-600 cursor-pointer">
                    {condition.name}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          {initialConditions.length > 4 && (
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

export default Conditions;
