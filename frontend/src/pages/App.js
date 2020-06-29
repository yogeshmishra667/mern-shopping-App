import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Products from '../components/product/Product-list';
import ProductScreen from '../components/product/productScreen';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import '../assets/style/index.css';
import cartScreen from './../components/product/cartScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Navbar />
        <Sidebar />
        <Route path="/products/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={cartScreen} />
        <Route path="/" exact={true} component={Products} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
