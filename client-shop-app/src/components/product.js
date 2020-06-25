import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/index.css';
import axios from 'axios';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  return products.map((product) => {
    return (
      <li className="product">
        <Link to={`/products/${product._id}`}>
          <img src={product.image} alt="slim shirt" className="product-img" />
        </Link>
        <div className="product-name">
          <Link to={`/products/${product._id}`}>{product.name}</Link>
        </div>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-rating">
          {product.rating} ({product.numReview})
        </div>
      </li>
    );
  });
}

export default Product;
