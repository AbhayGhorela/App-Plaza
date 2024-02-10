// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import { useAuth0 } from "@auth0/auth0-react";

function Header() {

  const { user, loginWithRedirect, logout, isAuthenticated} = useAuth0();

  return (
    <header className="bg-zinc-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className='brand flex justify-start items-center gap-4'>
          <img src={logo} alt="Brand Logo" className="w-8 h-8 rounded-full" />
          <Link to="/" className="text-xl font-bold">
            App Plaza
          </Link>
        </div>
        <nav className='flex items-center gap-4 font-bold'>
          
          
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/about" className="">
            About
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
          {
            isAuthenticated && <Link to="/download" className="">
            Download
          </Link>
          }
          
            {
              isAuthenticated && (
                <div className='flex items-center gap-4'>
                  <img src={user.picture} alt={user.name} className='w-8 h-8 rounded-full'/>
                  <h2>{user.name}</h2>
                </div>
              )
            }

            {
            isAuthenticated ?(
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='className="w-20 h-8 rounded-lg bg-red-500 px-3'>
            Log Out
          </button>
            ) : (
              <button onClick={() => loginWithRedirect()} className="w-20 h-8 rounded-lg bg-red-500 px-3">
            Log In
          </button>
            )
          }
          
        </nav>
      </div>
    </header>
  );
}

export default Header;
