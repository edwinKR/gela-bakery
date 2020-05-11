import React from 'react';
import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { fetchShopDataAsync } from '../../redux/shop/shop_action';

import PreviewAllItemContainer from '../../components/preview_all_item_container/PreviewAllItemContainer';
import { default as PreviewItemCollection } from '../preview_item_collection/PreviewItemCollection_Container';

// import WithSpinner from '../../components/with_spinner_HOC/WithSpinner';
// const PreviewAllItemContainerWithSpinner = WithSpinner(PreviewAllItemContainer);
// const PreviewItemCollectionWithSpinner = WithSpinner(PreviewItemCollection);

class ShopPage extends React.Component {
  // componentDidMount() {
  //   this.props.fetchShopDataAsync();
  // }

  render() {
    // const { match, isFetchingShopData } = this.props;
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={PreviewAllItemContainer}
          // render={(defaultProps) => (
          //   <PreviewAllItemContainerWithSpinner isLoading={isFetchingShopData} {...defaultProps} />
          // )}
        />
        <Route
          path={`${match.path}/:collectionRouteName`}
          component={PreviewItemCollection}
          // render={(defaultProps) => (
          //   <PreviewItemCollectionWithSpinner isLoading={isFetchingShopData} {...defaultProps} />
          // )}
        />
      </div>
    );
  }
}

// const mapStateToProps = (props) => {
//   let { shopData, isFetching } = props.shop;

//   // So the WithSpinner can be loaded.
//   if (!shopData && !isFetching) {
//     isFetching = true;
//   }

//   return {
//     isFetchingShopData: props.shop.isFetching,
//   };
// };

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     fetchShopDataAsync: () => dispatch(fetchShopDataAsync()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchtoProps)(ShopPage);
export default ShopPage;
