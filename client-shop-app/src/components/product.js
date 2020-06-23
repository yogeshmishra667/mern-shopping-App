import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/index.css';
import data from '../data/data';

export default function product() {
  return data.products.map((product) => {
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
