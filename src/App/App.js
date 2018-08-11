import React, { Component } from 'react';
import './App.css';
import Header from '../Common/Header';
import Home from '../Home/Home';

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
