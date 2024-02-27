import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";

function Profile() {

    const { user,  } = useAuth0();

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
    <div className="flex justify-center items-center min-h-screen bg-blue-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white shadow-outline-red rounded-lg overflow-hidden shadow-lg text-center"
      >
        {/* Profile Header */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-2">{user.name.split("@")[0]}</h1>
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
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAM1BMVEXk5ueutLeqsbTN0dPn6eqnrrHq7O3b3t/Q1NXe4eKxt7rT1tjJzc+2u77GyszX2tu+w8UNryZuAAADoklEQVR4nO2cW5LjIAwAAQsw2Bjuf9oBJ/PYzCQBYQRbRX/mq0tCPOUwNplMJpPJZDKZTCaTyWTSH1AKmPbea6OU6m3zSFRbApdSJKSwYTXxt1EA5XcnBP+BkDzsZhBF0I7/Y3d3FDyMoAg6yN92n3EMurMiqPBX9L4V+dK1XsDbV3qnouuYZ1je2J2G1nczPN6F767YKc0Q8vw4l2uPGMKe6xdj2MEQMvN7jyH5OIStxC9CXMtgyvTibEPqx1h2gXwZBspSVkupXzQkXfWeLr8vIExyWQV/hXAhE9QIvQSVHy6AKYRUoxDnx7mlESxZ4x5CuJEYgkP6cXGQ+GFLJGJJBNEZTnsGCsPiVe4bcVAMQov2izkmWJANZpn7CiFBBH2VoG7uV1MjJDNhPKnXsLcXRE/TJ+3LWNUUMeehvWCVn5iC/4Hg8GNw+Cqu2Ctwinlw+JWEbYOvxePvZobfD1btqNvXSLo5H/xMUnOqo7k/Gv1cPP7NAv5uxhH5YW+3JNntlkZOhWR3wMgb1pXKjw1/R42arCXt2zbinYTUr3w5oX5pgtJtIXnzQtl6Qv/aWTbX9HgvTi/uuVmmW0IeyO1Z6BK/BKwvm2bueh27Pobvmxm/84idrWXyqaI8evdunYrecfHbUQg7RPdbBED/7h8Ubpj+QZYUmVnjaDwthZCDdWDeUQqM3zavDajh5FIQ1U9gFEVIJkb7dT+Cc+dZxVoXwrFs2pgz+R3lUk6XKBZrQj4UiUg/2XDsm2adEg5sO6y9F8bTiVrEgIaFumAgRm538vkE/agp7bFpsmyD0sefU/NLx9T8TaEYJ7wlYwvzRDLoxskG8MFWXAFHxabjEbY/e86LFLndW9nFTUHN/fkPx6XFKq20K6yLF4p2vXpuBJN9QspUvPYcAOvbrX2poTiuqxZg7mK9G1ddCMezWxvEJTtuUMgL3xzDC058YNqk91Ox9kwP+urqeKDyOwTwTe0SVQ1xxQ37GCTekCB+CXQMSeKXkLg2/+IPHvDgGqxNXf9JGYhFJf+LpUsonrFhv3T38g5R+hAKnjR+iFKmHIA3ijpqiBN8UvYlAnGCEyVzDfZJvY6C17yKxpMK8kPYJ4Alo7CPH5eZ6wmsnQRz21bwnUXV5L2qYJtO6skrk2anzAzBkJXiTjWcsCZHsN8Q5DJnQTb9Apj3+aem3yd8k9Ncs/YUdO+PT3Dc/pOlExnnO7/0JGMMpue3fuQITiaTyZV8AAGUM3UrSu8AAAAAAElFTkSuQmCC"
          alt="User"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />

        <h4 className="text-gray-600">@User ID</h4>
        <p className="text-gray-600">Email Id</p>

        {/* Bio editor */}
        <textarea
          value={editedBio}
          onChange={handleBioChange}
          rows="6"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg">
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;