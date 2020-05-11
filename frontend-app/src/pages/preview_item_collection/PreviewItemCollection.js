import React from 'react';
// import { connect } from 'react-redux';

import SingleItem from '../../components/single_item/SingleItem';

import './preview_item_collection.styles.scss';

const PreviewItemCollection = (props) => {
  // if (!props.selectedCategoryCollection) {
  //   return <div>No Data</div>;
  // }

  // const { category, items } = props.selectedCategoryCollection;
  const { category, items } = props.singleCategory;
  return (
    <div className="preview_item_collection">
      <h2 className="category-name">{category.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <SingleItem key={item.id} singleItem={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, defaultProps) => {
//   const { shopData } = state.shop;
//   const selectedRouteName = defaultProps.match.params.collectionRouteName;
//   const selectedCategoryCollection = shopData ? shopData[selectedRouteName] : null;

//   return { selectedCategoryCollection };
// };

// export default connect(mapStateToProps)(PreviewItemCollection);
export default PreviewItemCollection;
