import React from 'react';

export default function Services() {
  return (
    <>
      
      <section id="/services" className="bg-slate-800 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-8 text-white text-center">Our Services</h2>
          <br /><br />
          <br />
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg service-box">
              <h3 className="text-2xl font-bold mb-4">Espresso Mastery</h3>
              <p className="text-custom-gray">Experience the perfect espresso made with precision and passion. Our baristas are trained to extract the richest flavors from premium beans.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg service-box">
              <h3 className="text-2xl font-bold mb-4">Artisan Pastries</h3>
              <p className="text-custom-gray">Indulge in our selection of freshly baked pastries, crafted with love and the finest ingredients. Perfectly paired with your favorite coffee.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg service-box">
              <h3 className="text-2xl font-bold mb-4">Specialty Teas</h3>
              <p className="text-custom-gray">Discover our diverse range of specialty teas, from classic blends to unique infusions. Each cup promises a journey of flavors and aromas.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg service-box">
              <h3 className="text-2xl font-bold mb-4">Gourmet Sandwiches</h3>
              <p className="text-custom-gray">Savor our gourmet sandwiches, made with fresh ingredients and artisanal bread. Perfect for a quick lunch or a leisurely snack.</p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br /><br />

      </section>


<br />

    </>
  );
}
