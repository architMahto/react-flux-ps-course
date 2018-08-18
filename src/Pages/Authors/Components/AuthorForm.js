import React, { Component } from 'react';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import AuthorFormView from './AuthorFormView';

import './AuthorForm.css';

export class AuthorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: {
				id: '',
				firstName: '',
				lastName: ''
			}
		}

		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(event) {
		const field = event.target.name;
		const value = event.target.value;

		this.setState({
			author: {
				...this.state.author,
				[field]: value
			}
		});
	}

	render() {
		return (
			<div className="Author-Form">
				<PageHeader>Add Author</PageHeader>
				<Grid fluid={true}>
					<Row>
						<Col xs={12}
								 sm={6}
								 md={4}
								 smOffset={3}
								 mdOffset={4}>
							<AuthorFormView author={this.state.author}
															onFieldChange={this.onFieldChange} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default AuthorForm;
