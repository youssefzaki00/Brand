import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [chosenProduct, setChosenProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ chosenProduct, setChosenProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
