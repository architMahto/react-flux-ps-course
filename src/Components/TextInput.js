import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const TextInput = ({label, name, value, error, placeholder, onFieldChange}) => {
	return (
		<FormGroup className={error ? 'has-error' : ''} controlId={name}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type="text"
									 name={name}
									 placeholder={placeholder}
									 value={value}
									 onChange={onFieldChange}
									 bsSize="lg"/>
			{ error && error.length > 0 ? (<span className="help-block">{error}</span>) : '' }
		</FormGroup>
	)
};

export default TextInput;
