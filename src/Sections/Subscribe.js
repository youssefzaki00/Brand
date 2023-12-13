import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Subscribe.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const db = getFirestore();
      const emailCollection = collection(db, "emails");
      await addDoc(emailCollection, { email });
      setSubscribed(true);
      toast.success("Subscribed successfully");
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };
  return (
    <div className="bg-gray-200 pt-2 pb-6 my-8 mb-0 hidden lg:block">
      <div className="container mx-auto xl:px-16 mt-4 text-center ">
        <h2 className="suppliers-title font-semibold text-lg xl:text-2xl pt-4">
          Subscribe on our newsletter
        </h2>
        <span className="px-4 text-slate-500 font-medium text-xs xl:text-base">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </span>
        <form
          className="subscribe flex gap-2 justify-center items-baseline mt-6 px-4"
          onSubmit={handleSubscribe}
        >
          <div className="input relative ">
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              id="subscribe-email"
              className="block p-2 xl:pr-20 pr-0 text-sm text-gray-900 bg-white rounded border border-gray-200 placeholder:text-gray-400 placeholder:font-medium mb-4 focus:outline-none input-with-icon"
              placeholder="Email"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="email-icon text-gray-400"
            />
          </div>

          <input
            type="submit"
            value={"Subscribe"}
            className="user-join  rounded-md mb-2 py-1 lg:py-1.5 px-1.5 lg:px-2.5 bg-blue-600 text-white text-md button"
          />
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Subscribe;
