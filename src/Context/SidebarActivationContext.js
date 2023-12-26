import React, { createContext, useContext, useState } from "react";


// Create a context
const SidebarContext = createContext();

// Create a context provider
const SidebarProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  // const toggleActivation = () => {
  //   setActive(!active)
  // }


  return (
    <SidebarContext.Provider
      value={{
        active,
        setActive,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarActivation = () => {
  return useContext(SidebarContext);
};
export { SidebarProvider, useSidebarActivation };
