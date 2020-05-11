import React from 'react';
import { connect } from 'react-redux';
// ========
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Spinner from '../with_spinner_HOC/Spinner';
// ===

import PreviewAllItems from '../preview_all_item/PreviewAllItems';

import './preview_all_item_container.styles.scss';

// ==============
const GET_CATEGORIES = gql`
  {
    categories {
      id
      category
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const PreviewAllItemContainer = () => {
  return (
    <Query query={GET_CATEGORIES}>
      {(queryProps) => {
        const { loading, data } = queryProps;
        if (queryProps.loading) return <Spinner />;
        return (
          <div className="preview-all-item-container">
            {data.categories.map(({ id, ...otherPreviewAllItemsProps }) => {
              return <PreviewAllItems key={id} {...otherPreviewAllItemsProps} />;
            })}
          </div>
        );
      }}
    </Query>
  );
};

export default PreviewAllItemContainer;
// ========

// const PreviewAllItemContainer = (props) => {
//   const { shoppingDataList } = props;
//   console.log(shoppingDataList);
//   return (
//     <div className="preview-all-item-container">
//       {shoppingDataList.map(({ id, ...otherPreviewAllItemsProps }) => {
//         return <PreviewAllItems key={id} {...otherPreviewAllItemsProps} />;
//       })}
//     </div>
//   );
// };

// const mapStateToProps = ({ shop: { shopData } }) => {
//   const shoppingDataList = shopData
//     ? Object.keys(shopData).map((singleKey) => shopData[singleKey])
//     : [];
//   return { shoppingDataList };
// };

// export default connect(mapStateToProps)(PreviewAllItemContainer);
