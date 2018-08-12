import React, { Component } from 'react';
import { Grid, Image, Nav, Navbar, NavItem } from 'react-bootstrap';

import './Header.css';
import logo from '../logo.svg';

class Header extends Component {
	render() {
		return (
			<Navbar className="App-navbar" inverse>
				<Grid>
					<Navbar.Header>
						<Navbar.Brand>
							<a className="App-logo-link" href="/">
								<Image src={logo} className="App-logo" />
							</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="/">Home</NavItem>
							<NavItem eventKey={2} href="/about">About</NavItem>
							<NavItem eventKey={3} href="/authors">Authors</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Grid>
			</Navbar>
		);
	}
}

export default Header;
