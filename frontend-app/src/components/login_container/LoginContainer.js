import React, { useState } from 'react';

import FormInput from '../form_input/FormInput';
import ButtonComponent from '../button_component/ButtonComponent';

import { auth, signInWithGoogle } from '../../firebase/firebase.utilities';

import './login_container.styles.scss';

const Login = props => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const { email, password } = loginInfo;

  const handleChange = event => {
    const { value, name } = event.target;

    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      alert('Invalid email/password. Please verify and try again.');
    }

    setLoginInfo({ email: '', password: '' });
  };

  return (
    <div className="login">
      <h2>Welcome Back User</h2>
      <span>Login with your account</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          placeholder="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          placeholder="Password"
          required
        />

        <div className="buttons">
          <ButtonComponent type="submit">LOG IN</ButtonComponent>
          <ButtonComponent onClick={signInWithGoogle}> GOOGLE LOG IN</ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default Login;
