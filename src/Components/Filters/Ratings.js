import React, { useEffect, useState } from 'react';
import { useCategoriesContext } from './FilterContext';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Ratings() {
  const initialRatings = [
    { rating: '⭐⭐⭐⭐⭐', isChecked: false },
    { rating: '⭐⭐⭐⭐', isChecked: false },
    { rating: '⭐⭐⭐', isChecked: false },
    { rating: '⭐⭐', isChecked: false },
    { rating: '⭐', isChecked: false },
  ]; 
  const [ratings, setRatings] = useState(initialRatings);
  const { activeSections,removeSection, toggleSection } = useCategoriesContext();

  useEffect(() => {
    const updatedRatings = ratings.map(rate => ({
      ...rate,
      isChecked: activeSections.includes(rate.rating)
    }));
    setRatings(updatedRatings);
  }, [activeSections]);

  const toggleRatings = (index) => {
    const updatedRatings = [...ratings];
    updatedRatings[index].isChecked = !updatedRatings[index].isChecked;
    setRatings(updatedRatings);
  };

  const updateActiveSections = (rate) => {
    if (rate.isChecked) {
      toggleSection(rate.rating);
    } else {
      removeSection(rate.rating);
    }
  };
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div data-accordion="collapse" className="text-gray-500">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-2.5 text-left text-gray-400 border-t border-gray-200"
          onClick={toggleAccordion}
        >
          <span className="text-black font-semibold">Ratings</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform transform ${
              isAccordionOpen ? 'rotate-180' : 'rotate-0'
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6">
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
            {ratings.map((condition, index) => (
              <li key={condition.rating}>
                <label className="flex items-center space-x-2 ">
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-400 border-gray-400 rounded-lg"
                    type="checkbox"
                    name="rating"
                    checked={condition.isChecked}
                    onChange={() => {
                      toggleRatings(index);
                      updateActiveSections(condition);

                    }}
                  />
                  <span className="text-black select-none hover:text-blue-600 cursor-pointer">
                    {[...Array(5)].map((_, starIndex) => (
                      <FontAwesomeIcon
                        key={starIndex}
                        icon={faStar}
                        className={`${
                          starIndex < condition.rating.length
                            ? 'text-orange-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
