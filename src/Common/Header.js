import React, { Component } from 'react';
import { Grid, Nav, Navbar, NavItem } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<Navbar inverse fixedTop>
				<Grid>
					<Navbar.Header>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="#">Home</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Grid>
			</Navbar>
		);
	}
}

export default Header;
