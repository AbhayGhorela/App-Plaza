// DownloadSection.jsx
import React, { useState, useEffect } from 'react';
import AppCard from './AppCard';
import axios from 'axios';

function DownloadSection() {
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
      for (let i = 0; i < 50; i++) {
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
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Download Our App Today!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appData.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
