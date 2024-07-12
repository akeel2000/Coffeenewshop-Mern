import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../Component/Header'; // Ensure correct import path for Header component

export default function Footer() {
  const location = useLocation();

  const renderLink = (to, label) => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:bg-gray-700 px-3 py-2  shadow-lg cursor-pointer"
          key={to}
        >
          {label}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to={`/#${to}`}
          className="hover:bg-gray-700 px-3 py-2 rounded-full shadow-lg cursor-pointer"
          key={to}
        >
          {label}
        </RouterLink>
      );
    }
  };

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
  <div className="container mx-auto">
    <nav className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
            {renderLink('home', 'Home')}
            {renderLink('about', 'About')}
            {renderLink('services', 'Services')}
            {renderLink('whyus', 'Why Us')}
            {renderLink('gallery', 'Gallery')}
            {renderLink('contact', 'Contact')}
        </ul>
    </nav>




    <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
    <a href="http://www.google.com" className="hover:text-gray-400 mx-2">Facebook</a>
    <a href="#" className="hover:text-gray-400 mx-2">Twitter</a>
    <a href="#" className="hover:text-gray-400 mx-2">Instagram</a>
    
</div>

        <p className="mt-4">&copy; 2024 Café Aurora. All rights reserved.</p>
      </div>
    </footer>
  );
}
