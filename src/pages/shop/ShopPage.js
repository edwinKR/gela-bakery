import React from 'react';
import { connect } from 'react-redux';

import PreviewAllItems from '../../components/preview_all_item/PreviewAllItems';

const ShopPage = props => {
  const { shopData } = props;

  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherPreviewAllItemsProps }) => {
        return <PreviewAllItems key={id} {...otherPreviewAllItemsProps} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ shop: { shopData } }) => {
  return { shopData };
};
export default connect(mapStateToProps)(ShopPage);
