/* eslint-disable no-useless-return */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import FormInput from '../form_input/FormInput';
import ButtonComponent from '../button_component/ButtonComponent';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utilities';

import './signup_container.styles.scss';

const SignupContainer = () => {
  const [signupInfo, setSignupInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = signupInfo;

  const handleChange = event => {
    const { name, value } = event.target;

    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your password don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.log('New user creation error!', error.message);
      alert('Password should be at least 6 characters!');
    }

    setSignupInfo({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="sign-up">
      <h2>New User</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          handleChange={handleChange}
          placeholder="Full Name"
          required
        />
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
          placeholder="Type in Password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <div className="buttons">
          <ButtonComponent type="submit">SIGN UP</ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignupContainer;
