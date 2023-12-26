import React, { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('date range');
  const options = ['date range', 'Name', 'Total','Profit'];
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setFilter(option);
    setIsOpen(false);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
}
useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex items-center">
      <button
        onClick={handleToggle}
        className="bg-white text-xs lg:text-sm flex items-center text-gray-400 py-1.5 px-2.5 rounded-md border border-gray-300 shadow"
      >
        Filter by {filter }  <ChevronDownIcon className=" h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
      {isOpen && (
        <div className="absolute z-10  py-2 w-32 bg-white border border-gray-300 divide-y divide-gray-100 rounded shadow -bottom-44 right-0">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="block px-4 py-2 text-sm text-black hover:bg-blue-500 hover:text-white w-full text-left"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
