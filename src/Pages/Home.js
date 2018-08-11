import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
	render() {
		return (
			<Jumbotron>
				<h1>Pluralsight Administration</h1>
				<p>React, React Router, and Flux for ultra-responsive web apps.</p>
			</Jumbotron>
		);
	}
}

export default Home;
