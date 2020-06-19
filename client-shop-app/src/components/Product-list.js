import React from 'react';
import Product from './product';
import '../index.css';
export default function products() {
  return (
    <main className="main">
      <div className="content">
        <ul className="products">
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </div>
    </main>
  );
}
