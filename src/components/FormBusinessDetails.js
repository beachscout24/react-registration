import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormBusinessDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider >
                <React.Fragment>
                    <Dialog
                        open="true"
                        fullWidth="true"
                        maxWidth='sm'
                    >
                        <AppBar>Enter Business Details</AppBar>
                        <TextField
                            placeholder="Enter Your Business Address"
                            label="busAddress"
                            onChange={handleChange('busAddress')}
                            defaultValue={values.busAddress}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Telephone"
                            label="telephone"
                            onChange={handleChange('telephone')}
                            defaultValue={values.telephone}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Email"
                            label="email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            margin="normal"
                        />
                        <br />

                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                        >Back</Button>

                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Continue</Button>
                    </Dialog>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormBusinessDetails;