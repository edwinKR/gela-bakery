import React from 'react';

import './button_component.styles.scss';

const ButtonComponent = ({ children, ...otherProps }) => {
  return (
    <button className="button-component" {...otherProps}>
      {children}
    </button>
  );
};

export default ButtonComponent;
