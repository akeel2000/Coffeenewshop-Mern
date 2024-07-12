import React from 'react';
import imgSrc1 from '../Component/OIP (6).jpeg';
import imgSrc2 from '../Component/aboutus5.jpg';


function About() {
  return (
    <>
      
      <section id="/about" className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-white h-full">
          <div className="md:w-1/2 p-4">
            <img className="mx-auto h-96 w-96 md:h-[30rem] md:w-[30rem] object-cover rounded-lg" src={imgSrc2} alt="Coffee Shop" />
          </div>
          <div className="md:w-1/2 text-center p-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-black relative">About Us</h2>
          <div className="border-b-2 border-gray-500 mx-auto w-32"></div>
          <br></br>
            <p className="text-lg text-black leading-relaxed">
              Welcome to Café Aurora, where every day begins with a beautiful dawn of flavors. At Café Aurora, we believe that each morning is an opportunity to enjoy the little things that make life wonderful, like a perfectly brewed cup of coffee. Our cozy café is a sanctuary where you can relax, unwind, and savor our hand-selected beans sourced from the finest coffee-growing regions. Whether you’re here to kickstart your day or to find a moment of peace, Café Aurora is your haven of warmth and deliciousness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
