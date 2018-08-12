import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Components/Header';

import About from '../Pages/About';
import Home from '../Pages/Home';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
			</div>
		);
	}
}

export default App;
