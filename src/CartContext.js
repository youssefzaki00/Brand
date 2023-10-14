import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, firestore } from './firebase';

// Create a context
const CartProductsContext  = createContext();

// Create a context provider
const CartProductsProvider  = ({ children }) => {
  const [CartProducts, setCartProducts] = useState([]);
  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      fetchCartProducts(user.uid);
    }
  }, [user]);
const fetchCartProducts = async (userUID) => {
  const snapshot = await firestore.collection('Users').doc(userUID).get();
  const userData = snapshot.data();
  if (userData) {
    setCartProducts(userData.CartProducts || []);
  }
}
const addToCart = (productID) => {
  if (user) {
    const updatedCartProducts = [...CartProducts, productID];
    setCartProducts(updatedCartProducts);
    updateFirestoreCartProducts(updatedCartProducts);
  }
};

const removeFromCart = (productID) => {
  if (user) {
    const updatedCartProducts = CartProducts.filter(id => id !== productID);
    setCartProducts(updatedCartProducts);
    updateFirestoreCartProducts(updatedCartProducts);
  }
  };
  const RemoveAllFromCart = () => {
    if (user) {
      const updatedCartProducts = [];
      setCartProducts([]);
      updateFirestoreCartProducts(updatedCartProducts)
    }
  }
const updateFirestoreCartProducts = async (updatedCartProducts) => {
  await firestore.collection('Users').doc(user.uid).update({
    CartProducts: updatedCartProducts,
  });
};
  return (
    <CartProductsContext.Provider
      value={{
        fetchCartProducts,
        CartProducts,
        addToCart,
        removeFromCart,
        RemoveAllFromCart,
      }}
    >
      {children}
    </CartProductsContext.Provider>
  );
};

const useCartProducts = () => {
  return useContext(CartProductsContext);
};
export { CartProductsProvider, useCartProducts };
