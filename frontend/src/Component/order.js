import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    axios.get('http://localhost:8090/product/')
      .then(res => {
        setProducts(res.data);
        setLoading(false); // Stop loading when data is received
      })
      .catch(err => {
        console.error(err);
        setLoading(false); // Stop loading on error
      });
  }, []);

  // If still loading, show a message or spinner
  if (loading) {
    return <div className="text-center text-xl">Loading products...</div>;
  }

  // If no products found, show a message
  if (products.length === 0) {
    return <div className="text-center text-xl">No products available.</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {products.map(product => (
          <div key={product._id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Full URL for the image */}
            <img
              src={`http://localhost:8090/uploads/${product.image}`}
              alt={product.name}
              className="h-40 w-full object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link
              to={`/product/${product._id}`}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Order
            </Link>
          </div>
        ))}
      </div>

      {/* Add Product Button */}
      <div className="flex justify-center">
        <Link
          to="/addproduct"
          className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
        >
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default ProductList;

