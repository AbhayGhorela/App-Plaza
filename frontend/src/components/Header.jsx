import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';

function Header() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header className="bg-zinc-900 text-white p-2 fixed top-0 z-10 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className='brand-nav flex justify-start items-center gap-4'>
          <img src={logo} alt="Brand Logo" className="brand-nav-logo w-8 h-8 rounded-full" />
          <Link to="/" className="brand-text text-xl font-bold">
            App Plaza
          </Link>
        </div>
        <button
          className="burger"
          onClick={() => setShowNavbar(!showNavbar)}
          aria-label="Toggle Navigation"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
        <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          
          {isAuthenticated && <Link to="/download" className="nav-link">Apps</Link>}
          {isAuthenticated && (
            <Link to="/profile" className="nav-link">
            Profile
          </Link>
          )}
          {isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='log w-20 h-8 rounded-lg bg-red-500 px-3 text-sm'>
              Log Out
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()} className="log w-20 h-8 rounded-lg bg-red-500 px-3 text-sm">
              Log In
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
