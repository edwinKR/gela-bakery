import React from 'react';
// import SingleItem from '../single_item/SingleItem';
import { default as SingleItem } from '../single_item/SingleItem_Container';
import './preview_all_items.styles.scss';

const PreviewAllItem = (props) => {
  const { category, items } = props;

  return (
    <div className="preview-all-items">
      <h1 className="item-name">{category.toUpperCase()}</h1>
      <div className="preview-container">
        {items
          .filter((item, idx) => idx < 4)
          .map((singleItem) => {
            return <SingleItem key={singleItem.id} singleItem={singleItem} />;
          })}
      </div>
    </div>
  );
};

export default PreviewAllItem;
