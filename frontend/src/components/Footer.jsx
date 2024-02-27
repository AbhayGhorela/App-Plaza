// Footer.jsx
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white max-w-100">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Connect with Us</h3>
          <div className="flex justify-center md:justify-start mt-2">
            <a href="#" className="mr-4 hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <p className="text-center md:text-left mb-4">Stay Updated</p>
          <form className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white  py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-2 py-2 rounded-r-md ml-1 focus:outline-none">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4">
        <p>&copy; 2024 App Plaza. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
