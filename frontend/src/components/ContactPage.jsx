// ContactPage.jsx
import React, { useState } from "react";
import Contact from "../assets/contact.svg";
import "./style.css"; // Import your CSS file
import { motion } from "framer-motion"; // Import motion from Framer Motion

function ContactPage() {
  return (
    <motion.div
      className="container-contact w-full min-h-screen mx-auto flex justify-center items-center bg-gray-900"
      initial={{ opacity: 0 }} // Set initial opacity to 0
      animate={{ opacity: 6 }} // Animate opacity to 1
      transition={{ duration: 0.1 }} // Set transition duration
    >
      <div className="w-full md:w-5/6 xl:w-4/6 bg-white mt-12 md:mt-16 lg:mt-24 rounded-lg flex flex-col md:flex-row justify-center items-center shadow-lg"
      
      >
        <div className="mail-svg w-full md:w-2/5">
          {/* contact image */}
          <img src={Contact} alt="contact image" className="w-full h-auto" />
        </div>
        <motion.div
          initial={{
            x: -135,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          
        className="w-full md:w-3/5 flex flex-col justify-center items-center px-6 md:px-10 lg:px-12 py-8 md:py-10">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-6 md:mb-8 lg:mb-10 ">Get in touch</h1>
          <form
            action="https://public.herotofu.com/v1/16c2ee80-c0ed-11ee-ae4a-bb6f42d3fd75"
            method="post"
            className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 flex flex-col jusify-center items-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="mb-4 px-12 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mb-4 px-12 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              cols="23"
              rows="5"
              placeholder="Message"
              className="mb-4 px-12 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <div className="flex justify-center">
              <input
              type="submit"
              value="Submit"
              className="submit w-20 h-10 my-1.5 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs  rounded-lg bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-blue-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            />
            <input
              type="reset"
              value="Reset"
              className="submit w-20 h-10 my-1.5 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs  rounded-lg bg-red-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-red-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mb-4 ml-4"
            />
            </div>
            
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
