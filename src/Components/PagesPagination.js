import React from "react";

function PagesPagination({ currentPage, totalPages, onPageChange }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      scrollToTop();
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      scrollToTop();
    }
  };

  // Calculate the range of pages to display around the current page
  const maxButtons = 4; // Maximum number of buttons to display
  const halfMaxButtons = Math.floor(maxButtons / 2);

  let startPage = Math.max(currentPage - halfMaxButtons, 1);
  let endPage = Math.min(startPage + maxButtons - 1, totalPages);

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(endPage - maxButtons + 1, 1);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center  py-2 select-none">
      <div className="ordersAmount flex justify-between gap-4 items-center mb-4  lg:mb-0">
        <button
          className="bg-white dark:text-white dark:bg-zinc-800 rounded text-black py-2 px-3 border border-gray-300 font-medium"
          onClick={previousPage}
        >
          Back
        </button>
      </div>
      <div className="ordersPages flex items-center select-none border border-gray-300 rounded-md ">
        <div
          className="pagination rounded-tl-md rounded-bl-md "
          onClick={previousPage}
        >
          Prev
        </div>
        {startPage > 1 && (
          <>
            <div className="pagination" onClick={() => onPageChange(1)}>
              1
            </div>
            {startPage > 2 && <div className="pagination">...</div>}
          </>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <div
            key={startPage + index}
            className={`pagination ${
              currentPage === startPage + index ? "active" : ""
            }`}
            onClick={() => onPageChange(startPage + index)}
          >
            {startPage + index}
          </div>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <div className="pagination">...</div>}
            <div
              className="pagination"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </div>
          </>
        )}
        <div
          className="pagination  rounded-r-md rounded-b-md"
          onClick={nextPage}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default PagesPagination;
