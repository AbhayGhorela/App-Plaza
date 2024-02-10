// FeaturedAppSection.jsx
import React, { useState, useEffect } from 'react';
import AppCard from './AppCard';
import axios from 'axios';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'

function FeaturedAppSection() {

  const { loginWithRedirect,isAuthenticated} = useAuth0();
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getRandomAppData');
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
          const response = await axios.get('http://localhost:3001/api/getRandomAppData');
          apps.push(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      setAppData(apps);
    };

    fetchDataMultipleTimes();
  }, []);

  
  return (
    <section className="bg-zinc-900 w-screen h-screen">
      <div className='hero'>
        <img src={Logo} alt="logo" className=' hero-img'/>
        <h1 className='hero-h1'>Discover the perfect app for your needs.</h1>
        <h2 className='hero-h2'>Browse thousands of apps, categorized for easy discovery. Find popular picks, hidden gems, and exclusive offers.</h2>
      </div>

      <div className="container mx-auto bg-white mt-10 p-10">
        <h2 className="text-4xl font-bold mb-6 pl-8 pt-3">Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appData.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </div>

      <div className='Our-site'>
        <h2 className='Os-h1'>Our Site</h2>
        <p className='Os-p'>App Plaza! As stewards of safe app browsing, we prioritize your security. Instead of offering direct download links, we redirect you to the official sources where you can securely download your desired apps. Trust in our dedication to providing a secure and reliable app discovery experience. Happy exploring!</p>
      </div>

      <div className='download'>
        <h2 className='down-h1'>Download Now!</h2>
       
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
