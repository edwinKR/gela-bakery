import React from 'react';

import LoginContainer from '../../components/login_container/LoginContainer';
import SignupContainer from '../../components/signup_container/SignupContainer';

import './login_signup_page.styles.scss';

const LoginSignupPage = () => {
  return (
    <div className="login-signup-page">
      <LoginContainer />
      <SignupContainer />
    </div>
  );
};

export default LoginSignupPage;
