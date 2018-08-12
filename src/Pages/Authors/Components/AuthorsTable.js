import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import './AuthorsTable.css';

class AuthorsTable extends Component {
	static createAuthorRow(author) {
		return (
			<tr key={author.id}>
				<td>{author.id}</td>
				<td>{author.firstName} {author.lastName}</td>
			</tr>
		);
	}

	render() {
		return (
			<Table bordered condensed hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{this.props.authors.map(AuthorsTable.createAuthorRow, this)}
				</tbody>
			</Table>
		);
	}
}

export default AuthorsTable;
