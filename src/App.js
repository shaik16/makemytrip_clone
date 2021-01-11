import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

class App extends Component {
	state = {
		popup: false,
	};

	handleClick = () => {
		this.setState({
			popup: !this.state.popup,
		});
		console.log('clicked');
	};

	render() {
		return (
			<div className='App'>
				<Header handleClick={this.handleClick} />
				<Login />
				<Signup />
			</div>
		);
	}
}

export default App;
