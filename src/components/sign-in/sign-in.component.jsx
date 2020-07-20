import React from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component.jsx";
import CustomButton from "../../components/custom-button/custom-button.component.jsx";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

import { googleSignInStart } from "../../redux/user/user.actions";
import SignUp from "../sign-up/sign-up.component";

class SignIn extends React.Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        email: "",
        password: "",
      });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            label="password"
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="submit">
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={googleSignInStart}
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchProps)(SignIn);
