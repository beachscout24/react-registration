import React, { Component } from "react";
import "../App.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      npiNumber: "",
      busAddress: "",
      telephone: "",
      email: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`
                ${this.state.firstName}\n
                ${this.state.lastName}\n
                ${this.state.npiNumber}\n
                ${this.state.busAddress}\n
                ${this.state.telephone}\n
                ${this.state.email}
            `);
    event.preventDefault();
  };

  render() {
    const {
      firstName,
      lastName,
      npiNumber,
      busAddress,
      telephone,
      email,
    } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        method="POST"
        action=""
        id="form-submit"
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            value={firstName}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="npiNumber">Npi Number</label>
          <input
            name="npiNumber"
            value={npiNumber}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="busAddress">Business Address</label>
          <input
            name="busAddress"
            value={busAddress}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="telephone">Telephone</label>
          <input
            name="telephone"
            value={telephone}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" value={email} onChange={this.handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
