import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';

import './App.css';

const CookiesPage = () => (
  <div>
    <h1>Cookies Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/cookies" component={CookiesPage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
