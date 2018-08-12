import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import AuthorApi from '../Api/AuthorApi';

class Authors extends Component {
	render() {
		return (
			<div className="Authors-Page">
				<PageHeader>
					<h1>Authors</h1>
				</PageHeader>
			</div>
		);
	}
}

export default Authors;
