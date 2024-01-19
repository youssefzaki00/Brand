import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import db, { auth } from "../Firebase/firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import brandLogo from "../imgs/Group 2.png";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useSavedProducts } from "../Context/SavedContext";
import { useCartProducts } from "../Context/CartContext";

const userInfo = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  ConfirmPassword: "",
  time: "",
};
function SignUp() {
  const [input, setInput] = useState(userInfo);
  const [error, setError] = useState("");
  const [verify, setVerify] = useState(false);
  const { fetchSavedProducts } = useSavedProducts();
  const { fetchCartProducts } = useCartProducts();
  auth.useDeviceLanguage();

  const passwordPolicy = {
    minLength: 6,
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.password.length < passwordPolicy.minLength) {
      return setError("Password should be at least 6 characters");
    }

    if (input.password !== input.ConfirmPassword) {
      return setError("Passwords don't match");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );

      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      toast.warn("Please verify your email. Check your inbox.");
      // Wait for email verification to complete
      await new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
          if (user.emailVerified) {
            clearInterval(intervalId);
            resolve();
          }
        }, 1000);
      });

      toast.success("Email verification sent. Please check your inbox.");
      // Check if the email is verified
      if (user.emailVerified) {
        const userData = {
          id: user.uid,
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phone: input.phone,
          time: serverTimestamp(),
        };

        const userRef = doc(db, "Users", user.uid);
        setDoc(userRef, userData);

        setInput({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        fetchSavedProducts(user.uid);
        fetchCartProducts(user.uid);

        toast.success("Welcome! Your email has been verified.");
        setInput(userInfo);
        navigate("/");
      } else {
        toast.error("Failed to send verification email. Please try again.");
        setError("Failed to send verification email. Please try again.");
      }
    } catch (error) {
      console.error("SignUp error:", error.message);

      if (error.message.includes("auth/weak-password")) {
        toast.error("Password should be at least 6 characters");
        setError("Password should be at least 6 characters");
      } else if (error.message.includes("auth/invalid-email")) {
        toast.error("Invalid email address");
        setError("Invalid email address");
      } else if (error.message.includes("auth/email-already-in-use")) {
        toast.error("Email is already in use");
        setError("Email is already in use");
      } else {
        toast.error("Unexpected error. Please try again later.");
        setError("Unexpected error. Please try again later.");
      }
    }
  };
  return (
    <>
      <div className="header  bg-white dark:bg-zinc-800">
        <header className="bg-white  dark:bg-zinc-800 flex items-center">
          <div className="container mx-auto px-4 xl:px-14  py-3 flex items-center gap-4 justify-between">
            <div className="brand ml-5 flex items-center">
              <a href="/#" className="flex items-center">
                <div className="icon">
                  <img src={brandLogo} alt="brand-logo" />
                </div>
                <h2 className="brand-name font-bold text-blue-400 text-2xl ml-5">
                  Brand
                </h2>
              </a>
            </div>
            <div className="signUp-signIn  flex  mt-2 mb-1 gap-4">
              <Link
                to="/login"
                className="user-login bg-white px-4 py-0 shadow-inner rounded-md text-md text-center font-medium text-blue-600 border border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-slate-100 hover:button-shadow"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="user-join rounded-md p-2.5 bg-blue-600  text-white text-md button text-center flex items-center justify-center hover:bg-blue-700"
              >
                sign up
              </Link>
            </div>
          </div>
        </header>
      </div>
      <form
        className=" bg-gray-50  dark:bg-zinc-900 w-full "
        onSubmit={handleSubmit}
      >
        <div className=" space-y-12 container mx-auto w-4/5 xl:w-2/6 py-16">
          <div className="bg-white  dark:bg-zinc-800 border-b border-gray-900/10 pb-8 border border-gray-300 rounded-lg p-4">
            <h2 className=" text-xl font-semibold">Create Account</h2>

            <div className=" mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName-"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={input.firstName}
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className=" shadow-sm   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  bg-gray-50 dark:bg-gray-200 block w-full p-2.5   "
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={input.lastName}
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className=" shadow-sm   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  bg-gray-50 dark:bg-gray-200 block w-full p-2.5    "
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    required
                    value={input.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    placeholder="type email"
                    type="email"
                    autoComplete="email"
                    className=" shadow-sm   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  bg-gray-50 dark:bg-gray-200 block w-full p-2.5 "
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    required
                    pattern="^01[0-2]\d{1,8}$"
                    type="number"
                    value={input.phone}
                    onChange={handleChange}
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    autoComplete="phone"
                    className=" shadow-sm  phone border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  bg-gray-50 dark:bg-gray-200 block w-full p-2.5 "
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                  >
                    Your password
                  </label>
                  <input
                    required
                    value={input.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="At least 6 characters."
                    id="password"
                    className=" shadow-sm   border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  bg-gray-50 dark:bg-gray-200 block w-full p-2.5  "
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <div className="mb-2">
                  <label
                    htmlFor="ConfirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Confirm password
                  </label>
                  <input
                    required
                    value={input.ConfirmPassword}
                    onChange={handleChange}
                    type="password"
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    className="shadow-sm   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  bg-gray-50 dark:bg-gray-200 block w-full p-2.5"
                  />
                </div>
              </div>

              <div className=" pb-4 col-span-6 gap-4 flex flex-col text-center">
                <button
                  type="submit"
                  className="button rounded-md text-md font-semibold text-white   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-blue-600 shadow transition-all"
                >
                  SignUp
                </button>

                <Link
                  to="/"
                  className="text-sm font-semibold leading-6 px-3 py-2 w-full text-blue-600 hover:bg-text-800 bg-gray-50 hover:bg-gray-100  shadow-lg transition-all rounded-md"
                >
                  Cancel
                </Link>
              </div>
              <div className=" col-span-6 flex justify-center ">
                Already a user ?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 ml-1 text-md hover:text-blue-800 font-semibold "
                >
                  {" "}
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-zinc-800 px-24 flex items-start justify-between text-start mx-auto">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 dark:text-gray-300 capitalize xl:text-center">
              © 2024 All rights reserved | Made by Youssef zaki
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
