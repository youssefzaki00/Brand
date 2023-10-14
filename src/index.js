import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Auth';
import { ProductProvider } from './ProductChosen';
import { CategoriesProvider } from './Components/Filters/FilterContext';
import { PriceRangeProvider } from './Components/Filters/PriceContext';
import { ProductsProvider } from './ProductsContext';
import {  SavedProductsProvider } from './SavedContext';
import { CartProductsProvider } from './CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <AuthProvider>
        <ProductProvider>
          <PriceRangeProvider>
            <CategoriesProvider>
              <ProductsProvider>
                <SavedProductsProvider>
                  <CartProductsProvider>
                    <App />
                    <ToastContainer />  
                  </CartProductsProvider>
                </SavedProductsProvider>
              </ProductsProvider>
            </CategoriesProvider>
          </PriceRangeProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>

);


// reportWebVitals();
