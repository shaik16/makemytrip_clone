import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<Login />
				<Signup />
			</div>
		);
	}
}

export default App;
