import React, { Component } from "react";
import "./style.css";

const styles ={
  border: "1px solid red",
  outline: "1px solid red"
}

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    //const { name, value } = event.target;
    // console.log(event.target);
    // <input name="firstName" type ="text" placeholder = "First Name" VALUE ="Chris">
    // <input name="lastName" type ="text" placeholder = "Last Name" VALUE ="Valenzuela">

    // the actualy value 
    const value = event.target.value;
    // firstName or lastName or password
    const name = event.target.name;
//    console.log(event.target.name);


    // Updating the input's state
    // this line of code saves it 
    // not sure why it is in []
    this.setState({
      [name]: value
    });
  };

  // when user clicks submit 
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // read the frist and last name and alert it
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    //this clears it again
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // disable submit button if any value on state is empty
    let disableBtn = (this.state.firstName === "" || this.state.lastName === "" || this.state.password === "");
    // set red border for each individual, empty input
    // dont really need this can just set to syle = {styles}
    let firstNameStyle = this.state.firstName === "" ? styles : {};
    let lastNameStyle = this.state.lastName === "" ? styles : {};
    let passwordStyle = this.state.password === "" ? styles : {};    

    // define strength of password and change according to string length
    let strength = "weak";

    if (this.state.password.length > 10) {
      strength = "strong";
    }
    else if (this.state.password.length > 5) {
      strength = "okay";
    }


    // Notice how each input has a `value`, `name`, and `onChange` prop
    // if you get rid of the onChange it doesnt type to the screen simulteanously
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
          <br/>
          Password is {strength}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
            style={firstNameStyle}
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
            style = {lastNameStyle}
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="password"
            style={passwordStyle}
            />
          <button onClick={this.handleFormSubmit} disabled={disableBtn}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
