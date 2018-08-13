import React from 'react';
import { PageHeader } from 'react-bootstrap';

import './AuthorProfile.css';

const AuthorProfile = ({ match, location }) => {
	return (
		<div className="Author-Profile-Page">
			<PageHeader>Author Profile</PageHeader>
		</div>
	);
};

export default AuthorProfile;
