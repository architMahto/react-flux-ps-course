import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Components/Header';

import About from '../Pages/About/About';
import Authors from '../Pages/Authors/Authors';
import Home from '../Pages/Home/Home';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/authors" component={Authors} />
			</div>
		);
	}
}

export default App;
