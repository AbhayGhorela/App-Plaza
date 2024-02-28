import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import UserProfile from "../assets/user profile.png";

function Profile() {
  const { user, logout, isAuthenticated } = useAuth0();

  // State for bio and edited bio
  const [bio, setBio] = useState(() => {
    // Retrieve bio from localStorage if available, otherwise use default value
    return localStorage.getItem("bio") || "Enter your bio here...";
  });
  const [editedBio, setEditedBio] = useState(bio);
  const [isActive, setIsActive] = useState(false); // State for active status

  // Function to handle bio editing
  const handleBioChange = (event) => {
    setEditedBio(event.target.value);
  };

  // Function to save the edited bio
  const saveBio = () => {
    setBio(editedBio);
    // Save bio to localStorage
    localStorage.setItem("bio", editedBio);
  };

  useEffect(() => {
    // Update editedBio when bio changes
    setEditedBio(bio);
  }, [bio]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 font-mono p-5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white shadow-outline-red rounded-lg overflow-hidden shadow-lg text-center lg:mt-16 md:mt-16 "
      >
        {/* Profile Header */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-2">
              {user.name.split("@")[0]}
            </h1>
          </div>
          {/* Active status indicator */}

          <div className="bg-green-500 text-white py-1 px-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Active
          </div>
        </div>

        {/* Profile Image */}
        <img
          src={UserProfile}
          alt="User"
          className="w-42 h-40 mx-auto mb-4 bg-center rounded-[80px]"
        />

        <h4 className="text-gray-600 font-bold text-xl">
          {user.name.split("@")[0]}
        </h4>
        <p className="text-gray-600 text-lg">{user.email}</p>

        {/* Bio editor */}
        <textarea
          value={editedBio}
          onChange={handleBioChange}
          rows="4"
          className=" mb-4 px-20 py-3  rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your bio here..."
        ></textarea>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 p-4">
          <button
            onClick={saveBio}
            className="bg-green-600 text-white py-2 px-4 rounded-lg"
          >
            Save Bio
          </button>
          {
            isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="bg-red-600 text-white py-2 px-4 rounded-lg">
            Logout
          </button>
          }
          
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;
