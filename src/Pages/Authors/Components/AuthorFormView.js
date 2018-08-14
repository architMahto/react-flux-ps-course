import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const AuthorFormView = () => {
	return (
		<form>
			<FormGroup controlId="first-name">
				<ControlLabel>First Name:</ControlLabel>
				<FormControl type="text" placeholder="Enter first name" bsSize="lg" />
			</FormGroup>
			<br />
			<FormGroup controlId="last-name">
				<ControlLabel>Last Name:</ControlLabel>
				<FormControl type="text" placeholder="Enter last name" bsSize="lg" />
			</FormGroup>
			<br />
			<Button type={'submit'} bsSize={'large'}>Submit</Button>
		</form>
	)
};

export default AuthorFormView;
