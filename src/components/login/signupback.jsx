import React, { Component } from "react";
import StepOne from "./stepone";
import StepTwo from "./steptwo";
import StepThree from "./stepthree";
import './loginstyles.css';

export class UserForm extends Component {
  state = {
    step: 1,
    name: "",
    password: "",
    confirmpswd: "",
    email: "",
    gender: "",
    dob: "",
    number: "",
  };

  /* Proceed to next step */
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  /* Go back to prev step */
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  /* Handle fields change */
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      name,
      email,
      password,
      confirmpswd,
      gender,
      dob,
      number,
    } = this.state;
    const values = { name, email, password, confirmpswd, gender, dob, number };

    switch (step) {
      case 1:
        return (
          <StepOne
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <StepTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <StepThree />;
    }
  }
}

export default UserForm;
