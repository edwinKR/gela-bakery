import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import NavBar from './components/navbar/NavBar';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />

      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
