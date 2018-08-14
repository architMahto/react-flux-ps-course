import React, { Component } from 'react';
import { Grid, PageHeader, Row } from 'react-bootstrap';

import AuthorFormView from './AuthorFormView';

import './AuthorForm.css';

export class AuthorForm extends Component {
	render() {
		return (
			<div className="Author-Form">
				<PageHeader>Add Author</PageHeader>
				<Grid>
					<Row xs={12} md={8}>
						<AuthorFormView />
					</Row>
				</Grid>
			</div>
		);
	}
}

export default AuthorForm;
