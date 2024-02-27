import React from "react";
import AboutImage from "../assets/about.png";
import Logo from "../assets/logo.png";
import AbhayImg from "../assets/abhay.jpg";
import KrishanImg from "../assets/krishan.jpg";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

function AboutPage() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black text-white min-h-screen overflow-hidden"
    >
      <div className="container mx-auto py-12 px-4 hover:font-serif">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-12">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 w-full md:w-1/2">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-3 pl-2 text-center"
            >
              Welcome to AppPlaza!
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                src={Logo}
                alt="Logo"
                className="w-44 h-44 mx-auto"
              />
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg mb-6"
            >
              At AppPlaza, we're dedicated to providing you with a seamless and secure experience when it comes to discovering and downloading apps for your devices. Whether you're an avid gamer, a productivity enthusiast, or simply looking for new tools to enhance your digital life, we've got you covered.
            </motion.p>
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl font-bold mb-2"
            >
              Our Vision
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg mb-6"
            >
              Our vision at AppPlaza is to become your go-to destination for all your app needs. We strive to curate a diverse collection of high-quality apps across various categories, ensuring that you find exactly what you're looking for, no matter your interests or preferences. Our ultimate goal is to simplify the app discovery process while prioritizing safety and user satisfaction.
            </motion.p>
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl font-bold mb-2"
            >
              Meet the Founders
            </motion.h2>
            <div className="flex items-center mb-6">
              <img
                src={AbhayImg}
                alt="Abhay Kumar Ghorela"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <motion.h3
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-lg font-semibold"
                >
                  Abhay Kumar Ghorela
                </motion.h3>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Founder & CEO
                </motion.p>
                <div className="text-start md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Connect with Us</h3>
                  <div className="flex justify-center md:justify-start">
                    <a
                      href="#"
                      className="mr-4 hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.facebook.com/abhay.ghorela.7/"
                      className="mr-4 hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://www.instagram.com/abhi.kumar_330/"
                      className="hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <img
                src={KrishanImg}
                alt="Krishan Kumawat"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <motion.h3
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="text-lg font-semibold"
                >
                  Krishan Kumawat
                </motion.h3>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  Co-founder & CTO
                </motion.p>
                <div className="text-start md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Connect with Us</h3>
                  <div className="flex justify-center md:justify-start">
                    <a
                      href="#"
                      className="mr-4 hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.facebook.com/krishakumawat207/"
                      className="mr-4 hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://www.instagram.com/krishana_207/"
                      className="hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-lg mb-8"
            >
              Hi there! I'm Abhay Kumar Ghorela, the founder and creator of AppPlaza. and Krishan Kumawat, Co-founder With a passion for technology and a deep understanding of the importance of safe and reliable app downloads, I embarked on this journey to provide users like you with a trustworthy platform to explore and download apps with confidence. I believe in the power of innovation and accessibility, and I'm committed to continuously improving AppPlaza to meet your evolving needs.
            </motion.p>
          </div>
          {/* Right Section */}
          <div className="relative w-full md:w-1/2 px-3">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              src={AboutImage}
              alt="About us image"
              className="w-full h-auto mx-auto md:mx-0"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-pink-500 opacity-40 rounded-[40px]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black animate-gradient opacity-40"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-black animate-gradient opacity-40"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-transparent to-black animate-gradient opacity-40"></div>
            <h2 className="text-blue text-2xl font-bold mb-4">Description:</h2>
            <p className="text-lg mb-6 ">
            Welcome to AppPlaza, your trusted hub for safe app downloads. AppPlaza offers a curated selection of apps from reputable sources like the Google Play Store. Our user-friendly interface and regular updates ensure a seamless app discovery experience. Join us and explore a world of apps with confidence at AppPlaza.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Key Components:
            </h2>
            <ol className="mb-6 hidden md:block">
              <li className="text-lg mb-4">
              User-Friendly Interface: Navigating through AppPlaza is a breeze. Our intuitive interface makes it easy for you to browse through categories, search for specific apps, and find recommendations tailored to your interests.
              </li>
              <li className="text-lg mb-4">
              Regular Updates: We're constantly updating our app library to bring you the latest and greatest offerings from the world of apps. Be sure to check back regularly to discover new gems and must-have downloads.
              </li>
            </ol>
            {/* <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, delay: 1 }}
              src={AboutImage}
              alt="About us image"
              className="w-full h-auto mx-auto mb-6"
            /> */}
            <ul>
              <li className="text-lg mb-4">
                Time Savings: Users save time by not having to manually search
                for relevant apps, as the platform intelligently surfaces
                recommendations based on their individual preferences and
                behavior.
              </li>
              <li className="text-lg mb-6">
              Community Engagement: Your feedback matters to us. We welcome your suggestions, comments, and ideas for improving AppPlaza. Together, we can make this platform even better.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
