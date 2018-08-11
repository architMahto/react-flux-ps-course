import React, { Component } from 'react';
import './App.css';
import Header from '../Common/Header';
import Home from '../Pages/Home';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Home />
			</div>
		);
	}
}

export default App;
