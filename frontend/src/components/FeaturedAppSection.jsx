// FeaturedAppSection.jsx
import React, { useState, useEffect } from 'react';
import AppCard from './AppCard';
import axios from 'axios';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'
import { motion } from "framer-motion";

function FeaturedAppSection() {

  const { loginWithRedirect,isAuthenticated} = useAuth0();
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://app-plaza-backend.vercel.app/api/getRandomAppData');
        setAppData([response.data]); // Wrap the response.data in an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data multiple times (adjust the count as needed)
    const fetchDataMultipleTimes = async () => {
      const apps = [];
      for (let i = 0; i < 3; i++) {
        try {
          const response = await axios.get('https://app-plaza-backend.vercel.app/api/getRandomAppData');
          apps.push(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false); // Ensure loading indicator is turned off even in case of error
        }
      }
      setAppData(apps);
    };

    fetchDataMultipleTimes();
  }, []);

  
  return (
    <section className="main w-full h-full bg-gray-900">
      <div className='hero mt-12'>
        <img src={Logo} alt="logo" className=' hero-img'/>
        <motion.h1
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
          className="hero-h1"
        >
          Discover the perfect app for your needs.
        </motion.h1>
        <motion.h2
          initial={{
            x: -135,
            opacity: 0.3,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          className="hero-h2"
        >
          Browse thousands of apps, categorized for easy discovery. Find popular
          picks, hidden gems, and exclusive offers.
        </motion.h2>
      </div>

      <div className="container-apps mx-2 bg-white mt-10 p-5">
        <h2 className="text-4xl font-bold mb-6 pl-8 pt-3">Apps</h2>
        <div>
          {loading ? (
            <p className="text-3xl font-bold animate-bounce text-blue-500 text-center">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appData.map((app, index) => (
                <AppCard key={index} {...app} />
              ))}
            </div>
         )}
         </div>
      </div>

      <div className='Our-site mx-2 font-semibold'>
        <h2 className='Os-h1'>Our Site</h2>
        <p className='Os-p'>App Plaza! As stewards of safe app browsing, we prioritize your security. Instead of offering direct download links, we redirect you to the official sources where you can securely download your desired apps. Trust in our dedication to providing a secure and reliable app discovery experience. Happy exploring!</p>
      </div>

      <div className='download mx-2'>
        <h2 className='down-h1'>Download Now!</h2>
        <p className='p-2 text-center font-semibold'>Download your needed apps from here and these are completely safe apps listed.</p>
       
        {
            isAuthenticated ?(
              <Link to="/download" className='btn'>Click here!</Link>
            ) : (
              <button onClick={() => loginWithRedirect()} className='btn'>
            Click here!
          </button>
            )
          }
        
      </div>
    </section>
  );
}

export default FeaturedAppSection;