import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PreviewAllItemContainer from '../../components/preview_all_item_container/PreviewAllItemContainer';
import PreviewItemCollection from '../preview_item_collection/PreviewItemCollection';

import { updateShopData } from '../../redux/shop/shop_action';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utilities';

import WithSpinner from '../../components/with_spinner_HOC/WithSpinner';
const PreviewAllItemContainerWithSpinner = WithSpinner(PreviewAllItemContainer);
const PreviewItemCollectionWithSpinner = WithSpinner(PreviewItemCollection);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const categoriesRef = firestore.collection('categories');

    categoriesRef.onSnapshot(async snapshot => {
      const shopDataMap = convertCollectionSnapshotToMap(snapshot);

      this.props.updateShopData(shopDataMap);

      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={defaultProps => (
            <PreviewAllItemContainerWithSpinner isLoading={loading} {...defaultProps} />
          )}
        />
        <Route
          path={`${match.path}/:collectionRouteName`}
          render={defaultProps => (
            <PreviewItemCollectionWithSpinner isLoading={loading} {...defaultProps} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    updateShopData: shopDataMap => dispatch(updateShopData(shopDataMap)),
  };
};

export default connect(null, mapDispatchtoProps)(ShopPage);
