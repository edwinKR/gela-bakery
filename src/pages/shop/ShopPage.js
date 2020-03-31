import React from 'react';
import { Route } from 'react-router-dom';

import PreviewAllItemContainer from '../../components/preview_all_item_container/PreviewAllItemContainer';
import PreviewItemCollection from '../preview_item_collection/PreviewItemCollection';

const ShopPage = props => {
  const { match } = props;
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={PreviewAllItemContainer} />
      <Route path={`${match.path}/:collectionRouteName`} component={PreviewItemCollection} />
    </div>
  );
};

export default ShopPage;
