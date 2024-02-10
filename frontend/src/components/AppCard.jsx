// AppCard.jsx
import React from 'react';

function AppCard({ appName, description, icon, downloadLink }) {
  return (
    <div className="bg-gray-200 p-6 rounded-lg">
      <img src={icon} alt={appName} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-xl font-bold mb-2">{appName}</h3>
      <p className="text-gray-700">{description}</p>
      <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500">
        Download here!
      </a>
    </div>
  );
}

export default AppCard;
