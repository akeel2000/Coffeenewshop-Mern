import React, { useEffect, useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import imgSrc from '../Component/OIP.jpeg'; // Ensure this path is correct

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Default to false
  const navigate = useNavigate();

  // Check if the user is authenticated when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('token'); // Check for token in local storage
    if (token) {
      setIsAuthenticated(true); // If token exists, the user is authenticated
    } else {
      setIsAuthenticated(false); // If no token, set it to false
    }
  }, []);

  // Handle the button click based on authentication state
  const handleOrderClick = () => {
    if (isAuthenticated) {
      navigate('/order'); // Navigate to order page if authenticated
    } else {
      navigate('/login'); // Navigate to login page if not authenticated
    }
  };

  return (
    <section id="/home" className="bg-cover bg-center bg-brown-700 h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center text-white h-full">
        <div className="md:w-1/2 text-center p-4">
          <h1 className="text-5xl font-bold mb-4 text-orange-700">Fuel Your Passion</h1>
          <h2 className="text-2xl max-w-lg font-bold text-white mx-auto mb-4">Discover the Magic in Every Cup.</h2>
          <p className="max-w-lg mx-auto">Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
          <div className="mt-6 space-x-4">
            {/* Order button that conditionally navigates based on authentication */}
            <button onClick={handleOrderClick} className="hover:bg-orange-700 px-3 py-2 rounded-full shadow-lg custom-button">
              Order Online
            </button>

            <RouterLink to="/booktable" className="hover:bg-orange-700 px-3 py-2 rounded-full shadow-lg custom-button">
              Book A Table
            </RouterLink>
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


