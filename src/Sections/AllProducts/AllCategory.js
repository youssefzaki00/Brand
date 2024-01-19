import React, { useEffect } from "react";
import Tags from "../../Components/Tags";

import { Outlet, useLocation, useNavigate } from "react-router";
function AllCategory() {
  const navigate = useNavigate();
  const Location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
    if (
      Location.pathname === "/AllCategory" ||
      Location.pathname === "/AllCategory/"
    ) {
      navigate("/AllCategory/AllProducts");
    }
  }, [Location, navigate]);
  return (
    <div className="container mx-auto pb-8 px-4 xl:px-16">
      <Tags />
      <Outlet />
    </div>
  );
}

export default AllCategory;
