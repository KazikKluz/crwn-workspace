import React from "react";
import "./sign-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component.jsx";

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return <div className="sign-in">
             <h2>I already have an account</h2>
             <span>Sign in with your email and password</span>
             <form onSubmit={this.handleSubmit}>
               <FormInput label="email" handleChange={this.handleChange} name="email" type="email" value={this.state.email} required/>
               <FormInput label="password" handleChange={this.handleChange} name="password" type="password" value={this.state.password} required/>
               <input type="submit" value="submit"/>
             </form>
           </div>;
  }

}

export default SignIn;
