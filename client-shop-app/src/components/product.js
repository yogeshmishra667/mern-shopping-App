import React from 'react';
import '../assets/style/index.css';

export default function product() {
  return (
    <li className="product">
      <img src="./images/p-1.jpg" alt="slim shirt" className="product-img" />
      <div className="product-name">
        <a href="#">woman slim shirt</a>
      </div>
      <div className="product-brand">black dream</div>
      <div className="product-price">$40</div>
      <div className="product-rating">4.2 rating (12 review)</div>
    </li>
  );
}
