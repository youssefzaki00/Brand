import React, { createContext, useContext, useEffect, useState } from "react";
import db from "../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from "../Auth/Auth";

// Create a context
const UserDataContext = createContext();

// Create a context provider
export const UserDataProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersRef = collection(db, "Users");
      try {
        const querySnapshot = await getDocs(usersRef);
        querySnapshot.forEach((doc) => {
          const userData = doc.data(); // Access data using doc.data()
          if (user) {
            if (userData.id === user.uid) {
              setUserInfo(userData);
            }
          }
        });
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <UserDataContext.Provider value={userInfo}>
      {children}
    </UserDataContext.Provider>
  );
};

// Custom hook to use the product context
export const UserData = () => {
  const UserData = useContext(UserDataContext);
  return UserData;
};
