import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu_item/MenuItem';

import './menu_container.style.scss';

const MenuContainer = ({ category }) => {
  return (
    <div className="menu-container">
      {category.map((singleCategory) => (
        <MenuItem key={singleCategory.name} singleCategory={singleCategory} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { category } = state.menuDirectory;
  return { category };
};
export default connect(mapStateToProps)(MenuContainer);
