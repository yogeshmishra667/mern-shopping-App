import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Products from '../components/Product-list';
import ProductScreen from '../components/productScreen';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import '../assets/style/index.css';
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Navbar />
        <Sidebar />
        <Route path="/products/:id" component={ProductScreen} />
        <Route path="/" exact={true} component={Products} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
