import React, { createContext, useContext, useEffect, useState } from "react";
import db from "../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

// Create a context
const OrderdProductsContext = createContext();

// Create a context provider
export const OrderdProductsProvider = ({ children }) => {
  const [orderdProducts, setOrderdProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ordersCollection = collection(db, "Orders");
      try {
        const querySnapshot = await getDocs(ordersCollection);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setOrderdProducts(data);
      } catch (error) {
        console.error("Error getting products:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <OrderdProductsContext.Provider value={orderdProducts}>
      {children}
    </OrderdProductsContext.Provider>
  );
};

// Custom hook to use the product context
export const useOrderdProducts = () => {
  const OrderdProducts = useContext(OrderdProductsContext);
  return OrderdProducts;
};
