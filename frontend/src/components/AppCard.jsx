// AppCard.jsx
import React from 'react';

function AppCard({ appName, description, icon, downloadLink }) {
  return (
    <div className="bg-gray-200 p-6 rounded-[30px]">
      <img src={icon} alt={appName} className="w-full h-80 object-cover mb-4 rounded-[50px]" />
      <h3 className="text-xl font-bold mb-2">{appName}</h3>
      <p className="text-gray-700">{description}</p>
      <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-800 text-white p-2 rounded-[12px] font-bold text-sm">
        Download here!
      </a>
    </div>
  );
}

export default AppCard;
