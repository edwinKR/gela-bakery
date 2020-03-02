import React from 'react';

import FormInput from '../form_input/FormInput';
import ButtonComponent from '../button_component/ButtonComponent';

import { auth, signInWithGoogle } from '../../firebase/firebase.utilities';

import './login_container.styles.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="login">
        <h2>Welcome Back User</h2>
        <span>Login with your account</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            placeholder="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}
