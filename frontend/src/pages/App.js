import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Products from '../components/product/Product-list';
import ProductScreen from '../components/product/productScreen';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import '../assets/style/index.css';

import cartScreen from './../components/product/cartScreen';
import SigninScreen from '../components/signin';
import RegisterScreen from './../components/userRegister';
import ProductsScreen from '../components/DproductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Navbar />
        <Sidebar />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={cartScreen} />
        <Route path="/" exact={true} component={Products} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
