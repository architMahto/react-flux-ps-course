import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className="Home-Page">
				<Jumbotron>
					<h1>Pluralsight Administration</h1>
					<p>React, React Router, and Flux for ultra-responsive web apps.</p>
				</Jumbotron>
			</div>
		);
	}
}

export default Home;
