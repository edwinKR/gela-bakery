import React from 'react';
// import { connect } from 'react-redux';

import ButtonComponent from '../button_component/ButtonComponent';

// import { addItem } from '../../redux/cart/cart_action';

import './single_item.styles.scss';

const SingleItem = (props) => {
  const { name, imageUrl, price } = props.singleItem;
  const { addItem } = props;
  return (
    <div className="single-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <ButtonComponent onClick={() => addItem(props.singleItem)}>ADD TO CART</ButtonComponent>
      </div>

      <div className="preview-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: item => dispatch(addItem(item)),
//   };
// };

export default SingleItem;
