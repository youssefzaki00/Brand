import React, { useEffect, useState } from 'react';
import { useCategoriesContext } from './FilterContext';

function Features() {
  const initialFeatures = [
    { name: 'Metallic frame', isChecked: false },
    { name: 'Super Amoled', isChecked: false },
    { name: 'Battery included', isChecked: false },
    { name: 'Large screen', isChecked: false },
    { name: 'Extra memory', isChecked: false },
  ];
  const [Features, setFeatures] = useState(initialFeatures);
const { activeSections,removeSection, toggleSection } = useCategoriesContext();
useEffect(() => {
    const updatedFeatures = Features.map(feature => ({
      ...feature,
      isChecked: activeSections.includes(feature.name)
    }));
    setFeatures(updatedFeatures);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSections]);

  const toggleCheckbox = (feature,index) => {
    const updatedFeatures = [...Features];
    updatedFeatures[index].isChecked = !feature.isChecked;;
    setFeatures(updatedFeatures);
  };

  const updateActiveSections = (feature) => {
  if (feature.isChecked) {
    toggleSection(feature.name);
  } else {
    removeSection(feature.name);
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

  const displayedLinks = showAll ? Features : Features.slice(0, 4);
  return (
    <div data-accordion="collapse" className="text-gray-500">
      <h2>
          <button
            type="button"
            className="flex items-center justify-between w-full py-2.5 text-left text-gray-400 border-t border-gray-200"
            onClick={toggleAccordion}
          >
            <span className='text-black font-semibold'>Features</span>
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
            {displayedLinks.map((feature, index) => (
            <li key={feature.name}>
              <label className="flex items-center space-x-2 ">
                <input
                  className='w-4 h-4 text-blue-600 bg-gray-400 border-gray-400 rounded-lg'
                  type="checkbox"
                  checked={feature.isChecked}
                  onChange={() => {
                      toggleCheckbox(feature, index);
                      updateActiveSections(feature);
                    }}
                />
                <span className="text-black select-none hover:text-blue-600 cursor-pointer">{feature.name}</span>
              </label>
            </li>
          ))}
          </ul>
          {initialFeatures.length > 4 && (
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

export default Features;
