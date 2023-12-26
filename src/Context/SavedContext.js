import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from "../Firebase/firebase";
import { toast } from "react-toastify";

// Create a context
const SavedProductsContext = createContext();

// Create a context provider
const SavedProductsProvider = ({ children }) => {
  const [savedProducts, setSavedProducts] = useState([]);
  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      fetchSavedProducts(user.uid);
    }
  }, [user]);
  const fetchSavedProducts = async (userUID) => {
    const snapshot = await firestore.collection("Users").doc(userUID).get();
    const userData = snapshot.data();
    if (userData) {
      setSavedProducts(userData.savedProducts || []);
    }
  };
  const addProduct = (productID) => {
    if (user) {
      const updatedSavedProducts = [...savedProducts, productID];
      setSavedProducts(updatedSavedProducts);
      updateFirestoreSavedProducts(updatedSavedProducts);
    }
  };

  const removeProduct = (productID) => {
    if (user) {
      const updatedSavedProducts = savedProducts.filter(
        (id) => id !== productID
      );
      setSavedProducts(updatedSavedProducts);
      updateFirestoreSavedProducts(updatedSavedProducts);
    }
  };
  const RemoveAll = () => {
    if (user) {
      const updatedSavedProducts = [];
      setSavedProducts([]);
      updateFirestoreSavedProducts(updatedSavedProducts);
      toast.error("All Products has Removed");
    }
  };
  const updateFirestoreSavedProducts = async (updatedSavedProducts) => {
    await firestore.collection("Users").doc(user.uid).update({
      savedProducts: updatedSavedProducts,
    });
  };
  return (
    <SavedProductsContext.Provider
      value={{
        fetchSavedProducts,
        savedProducts,
        addProduct,
        removeProduct,
        RemoveAll,
      }}
    >
      {children}
    </SavedProductsContext.Provider>
  );
};

const useSavedProducts = () => {
  return useContext(SavedProductsContext);
};
export { SavedProductsProvider, useSavedProducts };
