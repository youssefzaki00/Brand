import React from "react";
import { auth } from "../Firebase/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignOut() {
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
    <button
      className="user-sign-out flex justify-center items-center bg-white dark:bg-zinc-800 py-1.5 rounded-md text-md text-center font-medium w-full mt-2 text-blue-600"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}

export default SignOut;
