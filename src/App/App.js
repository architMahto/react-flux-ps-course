import React, { Component } from 'react';

import Header from '../Components/Header';

import About from '../Pages/About';
import Home from '../Pages/Home';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Home />
			</div>
		);
	}
}

export default App;
