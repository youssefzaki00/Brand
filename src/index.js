import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Auth/Auth";
import { ProductProvider } from "./Context/ProductChosen";
import { CategoriesProvider } from "./Context/FilterContext";
import { PriceRangeProvider } from "./Context/PriceContext";
import { ProductsProvider } from "./Context/ProductsContext";
import { SavedProductsProvider } from "./Context/SavedContext";
import { CartProductsProvider } from "./Context/CartContext";
import { SidebarProvider } from "./Context/SidebarActivationContext";
import { UserDataProvider } from "./Context/UserDataContext";
import { OrderdProductsProvider } from "./Context/OrderdProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
                    <SidebarProvider>
                      <UserDataProvider>
                        <OrderdProductsProvider>
                          <App />
                          <ToastContainer />
                        </OrderdProductsProvider>
                      </UserDataProvider>
                    </SidebarProvider>
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
