import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading product...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link to="/" className="text-blue-600 underline">← Back to Products</Link>

      <div className="flex flex-col md:flex-row gap-10 mt-6">
        <img src={product.image} alt={product.title} className="w-64 h-64 object-contain" />
        
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-green-700 text-xl font-semibold my-2">₹ {(product.price * 10).toFixed(0)}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
