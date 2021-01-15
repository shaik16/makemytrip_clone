import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FlightSearch from './components/FlightSearch/FlightSearch';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SearchResults from './components/SearchResults/SearchResults';
import Signup from './components/Signup/Signup';
import Booking from './components/Booking/Booking';
import BookingSuccess from './components/BookingSuccess/BookingSuccess';
import Profile from './components/Profile/Profile';
import ReviewBooking from './components/ReviewBooking/ReviewBooking';
import MyTrips from './components/MyTrips/MyTrips';

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
					<Route path='/review' component={ReviewBooking} />
					<Route path='/booking' component={Booking} />
					<Route path='/booking_success' component={BookingSuccess} />
					<Route path='/profile' component={Profile} />
					<Route path='/mytrip' component={MyTrips} />
				</Router>
			</div>
		);
	}
}

export default App;
