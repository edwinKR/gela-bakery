import React from 'react';

import './menu_item.style.scss';

const MenuItem = ({ name, imageUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="menu-item">
      <div className="content">
        <div className="title">{name}</div>
        <span className="sub-title">View your taste</span>
      </div>
    </div>
  );
};

export default MenuItem;
