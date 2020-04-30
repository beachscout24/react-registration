import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: {firstName, lastName, npiNumber, busAddress, telephone, email}
        } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Dialog
                        open="true"
                        fullWidth="true"
                        maxWidth='sm'
                    >
                        <AppBar>Confirm User Data</AppBar>
                        <List>
                            <ListItem>
                                <ListItemText primary="First Name" secondary={firstName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Last Name" secondary={lastName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Npi Number" secondary={npiNumber} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Business Address" secondary={busAddress} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Telephone" secondary={telephone} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={email} />
                            </ListItem>
                        </List>
                        <br/>

                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                        >Back</Button>

                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Confirm & Continue</Button>
                    </Dialog>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Confirm;