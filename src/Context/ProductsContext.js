import React, { createContext, useContext, useEffect, useState } from "react";
import db from "../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

// Create a context
const ProductsContext = createContext();

// Create a context provider
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productCollection = collection(db, "Products");
      try {
        const querySnapshot = await getDocs(productCollection);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setProducts(data);
      } catch (error) {
        console.error("Error getting products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook to use the product context
export const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};
