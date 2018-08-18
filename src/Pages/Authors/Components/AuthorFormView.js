import React from 'react';
import { Button } from 'react-bootstrap';

import TextInput from '../../../Components/TextInput';

const AuthorFormView = ({ author, onFieldChange }) => {
	return (
		<form>
			<TextInput label="First Name:"
								 name="firstName"
								 placeholder="Enter first name"
								 value={author.firstName}
								 onFieldChange={onFieldChange}/>
			<br/>
			<TextInput label="Last Name:"
								 name="lastName"
								 placeholder="Enter last name"
								 value={author.lastName}
								 onFieldChange={onFieldChange}/>
			<br/>
			<Button type={'submit'}
							bsSize={'large'}>
				Submit
			</Button>
		</form>
	)
};

export default AuthorFormView;
