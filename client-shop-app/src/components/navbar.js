import React from 'react';
import '../index.css';

export default function navbar() {
  return (
    <header className="header">
      <div className="brand">
        <button className="product-menu" onclick="openMenu()">
          &#9776;
        </button>
        <a href="index.html">Yo-shop 🔥</a>
      </div>
      <div className="brand-links">
        <a href="#" className="">
          cart
        </a>
        <a href="#" className="">
          signin
        </a>
      </div>
    </header>
  );
}
