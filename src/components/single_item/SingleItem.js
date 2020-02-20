import React from 'react';

import './single_item.styles.scss';

const SingleItem = props => {
  console.log(props);
  const { name, imageUrl, price } = props.singleItem;
  return (
    <div className="single-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="preview-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default SingleItem;
// style={{ backgroundImage: `url(${imageUrl})` }}
