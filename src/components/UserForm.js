import React, {Component} from "react";
import "../App.css";
import FormUserDetails from "./FormUserDetails";
import FormBusinessDetails from './FormBusinessDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            npiNumber: '',
            busAddress: '',
            telephone: '',
            email: '',
        };
    }

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    // Go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const {step} = this.state;
        const {
            firstName,
            lastName,
            npiNumber,
            busAddress,
            telephone,
            email
        } = this.state;

        const values = {
            firstName,
            lastName,
            npiNumber,
            busAddress,
            telephone,
            email
        };

        switch (step) {
            case 1:
                return (<FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange}
                                         values={values}/>)
            case 2:
                return (<FormBusinessDetails nextStep={this.nextStep} prevStep={this.prevStep}
                                             handleChange={this.handleChange}
                                             values={values}/>)
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return <Success/>;
            default:
                return;
        }
    }
}

export default UserForm;
