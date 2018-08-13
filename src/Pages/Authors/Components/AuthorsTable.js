import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import './AuthorsTable.css';

const createAuthorRow = (match) => {
	return function(author) {
		return (
			<tr key={author.id}>
				<td>
					<Link to={`${match.url}/${author.id}`}>{author.id}</Link>
				</td>
				<td>{author.firstName} {author.lastName}</td>
			</tr>
		);
	}
};

const AuthorsTable = ({ authors, match }) => {
	return (
		<Table bordered condensed hover>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{authors.map(createAuthorRow(match), this)}
			</tbody>
		</Table>
	)
};

export default AuthorsTable;
