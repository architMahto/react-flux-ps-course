import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import './AuthorsTable.css';

const createAuthorRow = (author) => {
	// TODO - Implement factory for match API
	// console.log('match:', match);
	// return function(author) {
		return (
			<tr key={author.id}>
				<td>
					<Link to={`courses/${author.id}`}>{author.id}</Link>
					{/*{author.id}*/}
				</td>
				<td>{author.firstName} {author.lastName}</td>
			</tr>
		);
	// }
};

const AuthorsTable = ({ authors }) => {
	return (
		<div>
			<Table bordered condensed hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{authors.map(createAuthorRow, this)}
				</tbody>
			</Table>
			<Route exact path={`courses/:author`} />
		</div>
	)
};

export default AuthorsTable;
