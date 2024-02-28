// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeaturedAppSection from './components/FeaturedAppSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-100">
        <Header />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/download" element={<DownloadSection />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/"
            element={
              <div>
                <FeaturedAppSection />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
