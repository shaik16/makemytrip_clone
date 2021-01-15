import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FlightSearch from './components/FlightSearch/FlightSearch';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SearchResults from './components/SearchResults/SearchResults';
import Signup from './components/Signup/Signup';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Header />
					<Login />
					<Signup />
					<Route path='/' exact component={FlightSearch} />
					<Route path='/flight_search' component={SearchResults} />
				</Router>
			</div>
		);
	}
}

export default App;
