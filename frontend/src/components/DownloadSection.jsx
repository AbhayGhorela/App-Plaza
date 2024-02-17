import React, { useState, useEffect } from 'react';
import AppCard from './AppCard';
import axios from 'axios';
import './style.css'

function DownloadSection() {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataMultipleTimes = async () => {
      try {
        const apps = [];
        for (let i = 0; i < 20; i++) {
          const response = await axios.get('http://localhost:3001/api/getRandomAppData');
          apps.push(response.data);
        }
        setAppData(apps);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Ensure loading indicator is turned off even in case of error
      }
    };

    fetchDataMultipleTimes();
  }, []);

  return (
    <section className="main-section-download py-12 w-full min-h-screen">
      <div className="container mx-auto text-center mt-20 px-3">
        <h2 className="text-3xl font-bold mb-6 text-white">Download Our App Today!</h2>
        <div className=''>
          {loading ? (
            <p className="text-3xl font-bold animate-bounce text-blue-500 mt-48">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appData.map((app, index) => (
                <AppCard key={index} {...app} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
