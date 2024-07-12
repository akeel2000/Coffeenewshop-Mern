import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


import imgSrc from '../Component/OIP.jpeg'; // Ensure this path is correct
import Header from '../Component/Header';

function Home() {
  return (
    <section id="/home" className="bg-cover bg-center bg-brown-700 h-screen">
    
      <div className="flex flex-col md:flex-row items-center justify-center text-white h-full">
        <div className="md:w-1/2 text-center p-4">
          <h1 className="text-5xl font-bold mb-4 text-orange-700">Fuel Your Passion</h1>
          <h2 className="text-2xl max-w-lg font-bold text-white mx-auto mb-4">Discover the Magic in Every Cup.</h2>
          <p className="max-w-lg mx-auto">Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
          <div className="mt-6 space-x-4">
          <RouterLink to="/order" className="hover:bg-orange-700 px-3 py-2 rounded-full shadow-lg custom-button">Order Online</RouterLink>

            <RouterLink to="/Booktable" className="hover:bg-orange-700 px-3 py-2 rounded-full shadow-lg custom-button">Book A Table</RouterLink>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <img className="mx-auto rounded-full h-96 w-96 md:h-[30rem] md:w-[30rem] object-cover" src={imgSrc} alt="Coffee Shop" />
        </div>
      </div>
    </section>
  );
}

export default Home;
