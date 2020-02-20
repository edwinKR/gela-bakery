import React from 'react';
import SHOPPING_DUMMY_DATA from './shop_dummy_data.js';

import PreviewAllItems from '../../components/preview_all_item/PreviewAllItems';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopData: SHOPPING_DUMMY_DATA,
    };
  }

  render() {
    const { shopData } = this.state;

    return (
      <div className="shop-page">
        {shopData.map(({ id, ...otherPreviewAllItemsProps }) => {
          return <PreviewAllItems key={id} {...otherPreviewAllItemsProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;

// {shopData.length > 0 ? (
//   shopData.map(el => {
//     console.log(el);
//     return (
//       <li key={el.id}>
//         {el.name}
//         <img src={el.imageUrl} alt={el.name} />
//       </li>
//     );
//   })
// ) : (
//   <p>No Data</p>
// )}
