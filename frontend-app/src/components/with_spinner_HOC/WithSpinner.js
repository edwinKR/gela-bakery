import React from 'react';

import Spinner from './Spinner';

const WithSpinner = InnerComponent => {
  return props => {
    const { isLoading } = props;
    return isLoading ? <Spinner /> : <InnerComponent {...props} />;
  };
};

export default WithSpinner;
