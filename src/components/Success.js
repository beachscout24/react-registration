import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export class Success extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<Dialog
						open="true"
						fullWidth="true"
						maxWidth='sm'
					>
						<AppBar>Success</AppBar>
						<h1 className="centered">Thank You For Joining Availity</h1>
						<p className="centered">You are now part of our system.</p>

					</Dialog>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Success;