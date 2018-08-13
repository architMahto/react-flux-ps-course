import React, { Component } from 'react';
import { ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';

import './About.css';

class About extends Component {
	render() {
		return (
			<div className="About-Page">
				<PageHeader>About</PageHeader>
				<p>This application uses the following technologies:</p>
				<ListGroup>
					<ListGroupItem>React</ListGroupItem>
					<ListGroupItem>ReactRouter</ListGroupItem>
					<ListGroupItem>Flux</ListGroupItem>
					<ListGroupItem>Bootstrap</ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}

export default About;
