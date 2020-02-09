import React from 'react';
import MenuContainer from './MenuContainer';

import './homepage.style.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Jela's Bakery!</h1>

      <MenuContainer />
    </div>
  );
};

export default HomePage;
