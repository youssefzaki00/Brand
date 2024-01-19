import React from "react";

function Searchbar2(props) {
  return (
    <form
      className={`container mx-auto px-4 xl:px-16 ${props.position1} mb-4
    xl:${props.position2}`}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-200 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 pl-10 text-sm text-gray-200 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500  dark:bg-slate-50 dark:border-slate-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        focus:border focus:border-slate-300 
        "
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
}

export default Searchbar2;
