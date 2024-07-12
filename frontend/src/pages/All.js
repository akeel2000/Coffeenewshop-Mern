import React from 'react';
import Home from '../Component/Home';
import About from '../Component/About';
import Services from '../Component/Services';
import Whyus from '../Component/Whyus';
import Gallery from '../Component/Gallery';
import Contact from '../Component/Contact';

function All() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="whyus">
        <Whyus />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default All;
