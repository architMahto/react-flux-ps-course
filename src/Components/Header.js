import React, { Component } from 'react';
import { Grid, Nav, Navbar, NavItem } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
	render() {
		return (
			<Navbar inverse>
				<Grid>
					<Navbar.Header>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="/">Home</NavItem>
							<NavItem eventKey={1} href="/about">About</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Grid>
			</Navbar>
		);
	}
}

export default Header;
