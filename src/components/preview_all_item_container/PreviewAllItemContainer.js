import React from 'react';
import { connect } from 'react-redux';

import PreviewAllItems from '../preview_all_item/PreviewAllItems';

import './preview_all_item_container.styles.scss';

const PreviewAllItemContainer = props => {
  const { shoppingDataList } = props;

  return (
    <div className="preview-all-item-container">
      {shoppingDataList.map(({ id, ...otherPreviewAllItemsProps }) => {
        return <PreviewAllItems key={id} {...otherPreviewAllItemsProps} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ shop: { shopData } }) => {
  const shoppingDataList = Object.keys(shopData).map(singleKey => shopData[singleKey]);
  return { shoppingDataList };
};

export default connect(mapStateToProps)(PreviewAllItemContainer);
