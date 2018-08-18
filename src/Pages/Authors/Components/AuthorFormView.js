import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const AuthorFormView = ({ author, onFieldChange }) => {
	return (
		<form>
			<FormGroup controlId="first-name">
				<ControlLabel>First Name:</ControlLabel>
				<FormControl type="text"
										 name="firstName"
										 placeholder="Enter first name"
										 value={author.firstName}
										 onChange={onFieldChange}
										 bsSize="lg" />
			</FormGroup>
			<br />
			<FormGroup controlId="last-name">
				<ControlLabel>Last Name:</ControlLabel>
				<FormControl type="text"
										 name="lastName"
										 placeholder="Enter last name"
										 value={author.lastName}
										 onChange={onFieldChange}
										 bsSize="lg" />
			</FormGroup>
			<br />
			<Button type={'submit'}
							bsSize={'large'}>
				Submit
			</Button>
		</form>
	)
};

export default AuthorFormView;
