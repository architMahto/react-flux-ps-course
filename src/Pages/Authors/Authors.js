import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import AuthorsTable from './Components/AuthorsTable';

import './Authors.css';

import AuthorApi from '../../Api/AuthorApi';

class Authors extends Component {
	state = {
		authors: []
	};

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
				<AuthorsTable authors={this.state.authors} />
			</div>
		);
	}
}

export default Authors;
