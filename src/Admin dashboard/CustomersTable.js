import React, { useEffect, useState } from "react";
import PagesPagination from "../Components/PagesPagination";
import db from "../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
function CustomersTable({ Cells, users }) {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const usersRef = collection(db, "Users");
      try {
        const querySnapshot = await getDocs(usersRef);
        const UsersData = querySnapshot.docs.map((doc) => doc.data());
        setUsers(UsersData);
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    fetchData();
  }, []);
  const [ShowDetails, setShowDetails] = useState("");
  const handleShowDetails = (name) => {
    setShowDetails((prevShowDetails) => (prevShowDetails === name ? "" : name));
  };
  // const [NewRows,setNewRows]=useState(users)
  const handleDelete = (id) => {
    const updatedUsers = Users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div className="bg-white rounded-xl orderTable py-2 shadow">
      <div
        className={`TableHeader grid grid-cols-2 lg:grid-cols-4 border-b border-b-gray-300 gap-x-10 lg:gap-x-0`}
      >
        {Cells.map((Cell) => (
          <div
            key={Cell}
            className={`text-xs px-5 py-3 uppercase text-gray-400 flex 
          ${
            Cell === "name" ? "lg:justify-start lg:pl-6" : "lg:justify-center "
          }  
          `}
          >
            {Cell}
          </div>
        ))}
      </div>

      {Users.map((Row) => (
        <div
          key={Row.id}
          className={`${ShowDetails === Row.id ? "ShowDetails" : ""} 
          grid  grid-cols-2 lg:grid-cols-4 border-b border-b-gray-300  items-center justify-center content-center select-none cursor-pointer `}
          onClick={() => handleShowDetails(Row.id)}
        >
          <div className="px-2.5 lg:px-5 py-2 lg:py-4 select-none text-xs flex items-center justify-start col-span-1">
            <div className="admin-image bg-sky-500 rounded-full hidden lg:block w-7 h-7 mr-2 relative  cursor-pointer"></div>
            <div className="flex flex-col items-start">
              <span>{`${Row.firstName} ${Row.lastName}`}</span>
              <span className="text-xs text-gray-400">{Row.email}</span>
            </div>
          </div>
          <div className="px-2.5 lg:px-5 py-2 lg:py-4 text-xs flex justify-center">
            {Row.phone}
          </div>
          <div className="px-2.5 lg:px-5 py-2 lg:py-4 text-xs flex justify-start lg:justify-center">
            {Row.time.toDate().toLocaleString()}
          </div>
          <div className="px-2.5 lg:px-5 py-2 lg:py-4 text-md  flex items-center gap-3  justify-center text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 7H6C4.89543 7 4 7.89543 4 9V18C4 19.1046 4.89543 20 6 20H15C16.1046 20 17 19.1046 17 18V15"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 15H12L20.5 6.49998C21.3284 5.67156 21.3284 4.32841 20.5 3.49998C19.6716 2.67156 18.3284 2.67156 17.5 3.49998L9 12V15"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 5L19 8"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="5"
                y="11"
                width="14"
                height="10"
                rx="2"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="16"
                r="1"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => {
                handleDelete(Row.id);
              }}
            >
              <path
                d="M4 7H20"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 11V17"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7"
                stroke="#8B909A"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ))}
      <PagesPagination />
    </div>
  );
}

export default CustomersTable;
