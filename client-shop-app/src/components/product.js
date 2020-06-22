import React from 'react';
import '../assets/style/index.css';
import data from '../data/data';

export default function product() {
  return data.products.map((product) => {
    return (
      <li className="product">
        <img src={product.image} alt="slim shirt" className="product-img" />
        <div className="product-name">
          <a href="#">{product.name}</a>
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
