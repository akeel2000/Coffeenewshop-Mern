import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import imgSrc from '../Component/ante-samarzija-lsmu0rUhUOk-unsplash.jpg';

function Header() {
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
          className="hover:bg-orange-700 px-3 py-2 rounded-full shadow-lg cursor-pointer"
        >
          {label}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to={`/#${to}`}
          className="hover:bg-orange-700 px-3 py-2 rounded-full shadow-lg cursor-pointer"
        >
          {label}
        </RouterLink>
      );
    }
  };

  return (
    <div className="font-sans leading-normal tracking-normal bg-gray-100">
      <header className="fixed top-0 w-full text-white flex justify-between items-center p-4 z-50 bg-brown-700">
        <div className="flex items-center">
          <img src={imgSrc} alt="Logo" className="w-16 h-16 rounded-full mr-2" />
          <h1 className="text-2xl font-bold">Café Aurora</h1>
        </div>
        <nav className="flex justify-end space-x-4">
          {renderLink('home', 'Home')}
          {renderLink('about', 'About')}
          {renderLink('services', 'Services')}
          {renderLink('whyus', 'Why Us')}
          {renderLink('gallery', 'Gallery')}
          {renderLink('contact', 'Contact')}
        </nav>
      </header>
    </div>
  );
}

export default Header;






