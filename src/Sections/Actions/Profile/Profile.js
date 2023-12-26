import React, { useEffect } from "react";
import Tags from "../../../Components/Tags";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/firebase.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
    const navigate = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      <div className="profile grid grid-cols-9 gap-4">
        <ul className="col-span-2 hidden xl:block text-gray-500 dark:text-white">
          {sections.map((section, i) => (
            <li key={i} className=" w-full hover:font-semibold py-2 px-8">
              <Link to={""}>{section}</Link>
            </li>
          ))}
          <li className=" w-full hover:font-semibold py-2 px-8">
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
