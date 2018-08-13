import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, PageHeader, Row } from 'react-bootstrap';

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
				<Grid>
					<Row xs={12} md={8}>
						<Link to={`${this.match.url}/add-author`}>
							<Button type={'button'} bsStyle={'primary'}>Add Author</Button>
						</Link>
						<AuthorsTable authors={this.state.authors} match={this.match} />
					</Row>
				</Grid>
			</div>
		);
	}
}

export default AuthorsList;
