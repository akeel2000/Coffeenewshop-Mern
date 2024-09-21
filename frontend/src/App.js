import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import About from './Component/About';
import Services from './Component/Services';
import Whyus from './Component/Whyus';
import Gallery from './Component/Gallery';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { Toaster } from 'react-hot-toast';
import All from './pages/All';
import Order from './Component/order';

import Book from './Component/book';
import LoginPage from './Component/Login';
import SignupPage from './Component/Signup';
import ProductList from './Component/order';
import AddProduct from './Component/Addproduct';


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact/>} />
        
        <Route path="/Booktable" element={<Book/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/order" element={<ProductList/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        


      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;


