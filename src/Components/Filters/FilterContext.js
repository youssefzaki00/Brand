import React, { createContext, useContext, useState } from "react";
import { usePriceRangeContext } from "./PriceContext";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [activeSections, setActiveSections] = useState([]);
  const { priceRange, setPriceRange } = usePriceRangeContext();

  const toggleSection = (title) => {
    if (activeSections.includes(title)) {
      setActiveSections(activeSections.filter((section) => section !== title));
    } else {
      setActiveSections([...activeSections, title]);
    }
  };
  const addPriceRange = (priceRange) => {
    // Provide a custom name for the price range filter
    const customPriceRangeName = `Price: $${priceRange.min}-$${priceRange.max}`;

    // Remove any previous price range filters
    const filteredSections = activeSections.filter(
      (section) => !section.startsWith("Price:")
    );

    // Add the new price range filter with the custom name
    setActiveSections([...filteredSections, customPriceRangeName]);
  };

const removePriceRange = () => {
  const filteredSections = activeSections.filter(
    (section) => !section.startsWith("Price:")
  );

  setActiveSections(filteredSections);
  setPriceRange({ min: null, max: null });
};

    
  const removeSection = (title) => {
    if (title.startsWith("Price:")) {
      removePriceRange();
      setPriceRange({ min: null, max: null });
    } else {
      setActiveSections(activeSections.filter((section) => section !== title));
    }
  };

  return (
    <CategoriesContext.Provider
      value={{ activeSections, toggleSection, removeSection, addPriceRange }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export function useCategoriesContext() {
  return useContext(CategoriesContext);
}
