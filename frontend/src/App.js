import React, { useState } from 'react';
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
import Book from './Component/book';
import LoginPage from './Component/Login';
import SignupPage from './Component/Signup';
import ProductList from './Component/order';
import AddProduct from './Component/order';
import ProtectedRoute from './Component/protected'; // Import ProtectedRoute

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
  // Manage authentication state globally
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Ensure this is defined

  return (
    <Router>
      <ScrollToTop />
      {/* Pass isAuthenticated and setIsAuthenticated to Header */}
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booktable" element={<Book />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected routes */}
        <Route 
          path="/order" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProductList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/addproduct" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddProduct />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
