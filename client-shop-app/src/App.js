import React from 'react';
import Navbar from './components/navbar';
import Products from './components/Product-list';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import './index.css';
function App() {
  return (
    <div className="grid-container">
      <Navbar />
      <Sidebar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
