import React, { Component } from 'react';
import { Button, PageHeader } from 'react-bootstrap';

import AuthorsTable from './AuthorsTable';

import './AuthorsList.css';

import AuthorApi from '../../../Api/AuthorApi';

class AuthorsList extends Component {
	constructor(props) {
		super(props);
		this.match = props.match;

		this.state = {
			authors: []
		};
	}

	// set the state of the component
	componentDidMount() {
		this.setState({
			authors: AuthorApi.getAuthors()
		});
	}

	render() {
		return (
			<div className="Authors-Page">
				<PageHeader>Authors</PageHeader>
				<div className="Page-Container">
					<AuthorsTable authors={this.state.authors} match={this.match} />
				</div>
			</div>
		);
	}
}

export default AuthorsList;
