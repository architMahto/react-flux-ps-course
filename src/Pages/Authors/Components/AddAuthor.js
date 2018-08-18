import React, { Component } from 'react';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import AuthorForm from './AuthorForm';

import AuthorApi from '../../../Api/AuthorApi';

import './AddAuthor.css';

export class AddAuthor extends Component {
	constructor(props) {
		super(props);
		this.match = props.match;
		this.history = props.history;
		this.state = {
			author: {
				id: '',
				firstName: '',
				lastName: ''
			},
			errors: {}
		};

		this.onFieldChange = this.onFieldChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onFieldChange(event) {
		const field = event.target.name;
		const value = event.target.value;

		this.setState({
			...this.state,
			author: {
				...this.state.author,
				[field]: value
			},
			errors: {}
		});
	}

	isFormValid() {
		let {isFormValid, errors} = this.validateFields();

		this.setState({
			...this.state,
			errors
		});

		return isFormValid;
	}

	validateFields() {
		let isFormValid = true;
		let errors = {};

		if (this.state.author.firstName.length < 3) {
			errors['firstName'] = 'First name must be at least 3 characters';
			isFormValid = false;
		}

		if (this.state.author.lastName.length < 3) {
			errors['lastName'] = 'Last name must be at least 3 characters';
			isFormValid = false;
		}

		return {isFormValid, errors};
	}

	handleSubmit(event) {
		event.preventDefault();

		if (!this.isFormValid()) {
			return;
		}

		AuthorApi.addAuthor(this.state.author);
		this.history.push('/authors');
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
							<AuthorForm author={this.state.author}
													errors={this.state.errors}
													onFieldChange={this.onFieldChange}
													handleSubmit={this.handleSubmit}/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default AddAuthor;
