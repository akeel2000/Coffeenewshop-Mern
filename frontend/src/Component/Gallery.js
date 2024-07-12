import React from 'react';
import imgSrc2 from '../Component/OIP (3).jpeg';
import imgSrc3 from '../Component/logonew.jpeg';
import imgSrc4 from '../Component/rounded.png';
import Header from '../Component/Header';

export default function Gallery() {
  return (
    <>

   
<section id="/gallery" className="bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-125">
              <img src={imgSrc4} alt="Gallery item 1" className="w-full h-60 object-cover rounded-lg" />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-125">
              <img src={imgSrc3} alt="Gallery item 2" className="w-full h-60 object-cover rounded-lg" />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-125">
              <img src={imgSrc2} alt="Gallery item 3" className="w-full h-60 object-cover rounded-lg" />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-125">
              <img src={imgSrc3} alt="Gallery item 4" className="w-full h-60 object-cover rounded-lg" />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-125">
              <img src={imgSrc3} alt="Gallery item 5" className="w-full h-60 object-cover rounded-lg" />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-125">
              <img src={imgSrc3} alt="Gallery item 6" className="w-full h-60 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

