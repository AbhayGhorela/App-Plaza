// ContactPage.jsx
import React,{useState} from 'react';
import Contact from '../assets/contact.svg';
import './style.css';  // Import your CSS file

function ContactPage() {
  
  return (
    <div className="container-contact w-full min-h-screen mx-auto flex justify-center">
      <div className="contact-element w-5/6 h-5/6 bg-white mt-48 md:mt-28 md:mb-8 rounded-lg flex flex-col md:flex-row justify-center items-center">
        <div className="mail-svg w-5/6 h-5/6">
          {/* contact image */}
          <img src={Contact} alt="contact image" className="w-full h-full" />
        </div>
        <div className="contact-form w-5/6 h-5/6 flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl">Get in touch</h1>
          <form action="https://public.herotofu.com/v1/16c2ee80-c0ed-11ee-ae4a-bb6f42d3fd75" method="post" className="w-80">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-80 h-8 my-2.5 rounded-lg bg-gray-200 hover:drop-shadow-md"
              required
              
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-80 h-8 mb-2.5 rounded-lg bg-gray-200 hover:drop-shadow-md"
              required
              
            />
            <textarea
              name="message"
              cols="40"
              rows="5"
              placeholder="Message"
              className="rounded-lg bg-gray-200 hover:drop-shadow-md"
              
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="submit w-80 h-8 my-1.5 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs  rounded-lg bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-blue-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            />
            <input
              type="reset"
              value="Reset"
              className="submit w-80 h-8 my-1.5 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs  rounded-lg bg-red-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-red-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mb-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
