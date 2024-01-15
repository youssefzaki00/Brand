import React, { useEffect } from "react";
import Tags from "../../../Components/Tags";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/firebase.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    scrollToTop();
    if (location.pathname === "/profile" || location.pathname === "/profile/") {
      navigate("/profile/Personal%20info");
    }
  }, [location, navigate]);
  const sections = [
    "Personal info",
    "New orders",
    "Orders history",
    "My wishlist",
    "Transactions",
    "Profile setting",
  ];
  async function handleSignOut() {
    try {
      await auth.signOut();
      localStorage.removeItem("isLoggedIn");
      window.location.reload();
      toast.success("You have successfully signed out.");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("An error occurred while signing out.");
    }
  }

  return (
    <div className="container mx-auto pb-8 px-4 lg:px-16">
      <Tags />
      <article className="profile grid grid-cols-9 gap-4">
        <ul className="col-span-2 hidden xl:block text-gray-500 dark:text-white">
          {sections.map((section, i) => (
            <li key={i} className={`w-full !p-0 !mb-1 hover:!bg-blue-100`}>
              <Link
                to={section}
                className={`block p-2 hover:font-medium ${
                  location.pathname.includes(section.replace(" ", "%20"))
                    ? "bg-blue-100 rounded text-black font-medium"
                    : ""
                }`}
              >
                {section}
              </Link>
            </li>
          ))}
          <li className=" w-full hover:font-semibold">
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
        </ul>
        <section className="bg-white dark:bg-zinc-800 rounded-md border p-4 border-gray-300 h-fit col-span-7">
          <Outlet />
        </section>
      </article>
    </div>
  );
}

export default Profile;
