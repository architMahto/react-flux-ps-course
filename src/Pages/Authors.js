import React, { Component } from 'react';
import { PageHeader, Table } from 'react-bootstrap';

import './Authors.css';

import AuthorApi from '../Api/AuthorApi';

class Authors extends Component {
	state = {
		authors: []
	};

	static createAuthorRow(author) {
		return (
			<tr key={author.id}>
				<td>{author.id}</td>
				<td>{author.firstName} {author.lastName}</td>
			</tr>
		);
	}

	// set the state of the component
	UNSAFE_componentWillMount() {
		this.setState({
			authors: AuthorApi.getAuthors()
		});
	}

	render() {
		return (
			<div className="Authors-Page">
				<PageHeader>
					Authors
				</PageHeader>
				<div className="Authors-Table-Container">
					<Table bordered condensed hover>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
							</tr>
						</thead>
						<tbody>
							{this.state.authors.map(Authors.createAuthorRow, this)}
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default Authors;
