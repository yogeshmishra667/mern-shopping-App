import React from 'react';
import Product from './product';
import '../../assets/style/index.css';
export default function products() {
  return (
    <main className="main">
      <div className="content">
        <ul className="products">
          <Product />
        </ul>
      </div>
    </main>
  );
}
