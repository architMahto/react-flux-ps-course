import React, { Component } from 'react';
import { Grid, ListGroup, ListGroupItem, PageHeader, Row } from 'react-bootstrap';

import './About.css';

class About extends Component {
	render() {
		return (
			<div className="About-Page">
				<PageHeader>About</PageHeader>
				<Grid>
					<Row xs={12} md={8}>
						<p>This application uses the following technologies:</p>
						<ListGroup>
							<ListGroupItem>React</ListGroupItem>
							<ListGroupItem>ReactRouter</ListGroupItem>
							<ListGroupItem>Flux</ListGroupItem>
							<ListGroupItem>Bootstrap</ListGroupItem>
						</ListGroup>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default About;
