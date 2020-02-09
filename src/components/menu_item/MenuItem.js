import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu_item.style.scss';

const MenuItem = props => {
  console.log(props);
  const { name, imageUrl, size, linkUrl } = props.singleCategory;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => props.history.push(`${props.match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);
