/* eslint-disable no-useless-return */
/* eslint-disable no-alert */
import React from 'react';

import FormInput from '../form_input/FormInput';
import ButtonComponent from '../button_component/ButtonComponent';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utilities';

import './signup_container.styles.scss';

class SignupContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

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

    this.setState(
      {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      () => console.log(this.state),
    );
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2>New User</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
            placeholder="Full Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            placeholder="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            placeholder="Type in Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            placeholder="Confirm Password"
            required
          />
          <div className="buttons">
            <ButtonComponent type="submit">SIGN UP</ButtonComponent>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupContainer;
