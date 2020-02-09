import React from 'react';

import './menu_item.style.scss';

const MenuItem = ({ name, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="content">
        <div className="title">{name}</div>
        <span className="sub-title">View your taste</span>
      </div>
    </div>
  );
};

export default MenuItem;
