import React, {Component} from 'react';
import "../App.css"

class RegistrationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            npiNumber: '',
            busAddress: '',
            telephone: '',
            email: ''
        }
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        });
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value,
        })
    }

    handleNPIChange = event => {
        this.setState({
            npiNumber: event.target.value,
        })
    }

    handleAddressChange = event => {
        this.setState({
            busAddress: event.target.value,
        })
    }

    handleTelephoneChange = event => {
        this.setState({
            telephone: event.target.value,
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value,
        })
    }

    handleSubmit = event => {
        alert(`
                ${this.state.firstName}\n
                ${this.state.lastName}\n
                ${this.state.npiNumber}\n
                ${this.state.busAddress}\n
                ${this.state.telephone}\n
                ${this.state.email}
            `);
        event.preventDefault();
    }

    render() {
        const {firstName, lastName, npiNumber, busAddress, telephone, email} = this.state
        return (
            <form onSubmit={this.handleSubmit} method="POST" action="" id="form-submit">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" value={firstName} type="text" onChange={this.handleFirstNameChange}/></div>
                <div>
                    <label htmlFor="lastName" >Last Name</label>
                    <input name="lastName" value={lastName} onChange={this.handleLastNameChange}/>
                </div>
                <div>
                    <label htmlFor="npiNumber" >Npi Number</label>
                    <input name="npiNumber" value={npiNumber} onChange={this.handleNPIChange}/>
                </div>
                <div>
                    <label htmlFor="busAddress" >Business Address</label>
                    <input name="busAddress" value={busAddress} onChange={this.handleAddressChange}/>
                </div>
                <div>
                    <label htmlFor="telephone" >Telephone</label>
                    <input name="telephone" value={telephone} onChange={this.handleTelephoneChange}/>
                </div>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input name="email" value={email} onChange={this.handleEmailChange}/></div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default RegistrationForm;