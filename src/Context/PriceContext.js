import React, { createContext, useContext, useState } from 'react';

const PriceRangeContext = createContext();

export const usePriceRangeContext = () => {
  return useContext(PriceRangeContext);
};

export const PriceRangeProvider = ({ children }) => {
  const [priceRange, setPriceRange] = useState({ min: null, max: null });

  return (
    <PriceRangeContext.Provider value={{ priceRange, setPriceRange }}>
      {children}
    </PriceRangeContext.Provider>
  );
};
