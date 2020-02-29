import React from 'react';

import './form_input.styles.scss';

const FormInput = ({ handleChange, ...otherProps }) => {
  return (
    <div className="form-input-container">
      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
