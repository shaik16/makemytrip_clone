import React, { Component } from 'react';
import './FlightSearch.css';
// import currentDate from '../CurrentDate';
import airplane from '../../images/airplane.png';
import { connect } from 'react-redux';
import {
	airportDataRequest,
	searchHandleChange,
	searchHandleSubmit,
} from '../store/actions/searchAction';
import { Link } from 'react-router-dom';
import WhyMakeMyTrip from '../WhyMakeMyTrip/WhyMakeMyTrip';

export class FlightSearch extends Component {
	async componentDidMount() {
		this.props.airportDataRequest();
	}
	render() {
		return (
			<>
				<div className='flight-search-section'>
					<div className='container  bg-light  rounded-3 px-5 '>
						<div className='container w-25 position-relative bg-light border rounded-3 flight-icon'>
							<div
								className='pt-2 d-flex 
						flex-column 
						align-items-center b
						border border-3 border-primary 
						border-top-0 
						border-start-0
						border-end-0'>
								<img src={airplane} alt='fight-logo' height='50' width='50' />
								<h6>Flights</h6>
							</div>
						</div>

						<form onSubmit={(event) => event.preventDefault()} className='pb-5 pt-3'>
							<div className='row g-2'>
								<div className='col-md'>
									<div className='form-floating'>
										<select
											className='form-select'
											id='floatingSelectGrid'
											aria-label='Floating label select example'
											value={this.props.from}
											onChange={(event) => this.props.searchHandleChange(event)}
											name='from'>
											{this.props.airportList.map((obj, index) => {
												return (
													<option key={index} value={obj.location_id}>
														{obj.city}
													</option>
												);
											})}
										</select>
										<label htmlFor='floatingSelectGrid'>FROM</label>
									</div>
								</div>
								<div className='col-md'>
									<div className='form-floating'>
										<select
											className='form-select'
											id='floatingSelectGrid'
											aria-label='Floating label select example'
											value={this.props.to}
											onChange={(event) => this.props.searchHandleChange(event)}
											name='to'>
											{this.props.airportList.map((obj, index) => {
												return (
													<option key={index} value={obj.location_id}>
														{obj.city}
													</option>
												);
											})}
										</select>
										<label htmlFor='floatingSelectGrid'>TO</label>
									</div>
								</div>
								<div className='col-md'>
									<div className='form-floating'>
										<input
											type='date'
											className='form-control'
											value={this.props.date}
											name='date'
											onChange={(event) => this.props.searchHandleChange(event)}
										/>
										<label htmlFor='floatingSelectGrid'>Departure Date</label>
									</div>
								</div>
								<div className='col-md'>
									<div className='form-floating'>
										<select
											className='form-select'
											id='floatingSelectGrid'
											aria-label='Floating label select example'
											value={this.props.travellers}
											onChange={(event) => this.props.searchHandleChange(event)}
											name='travellers'>
											<option value='1'>1</option>
											<option value='2'>2</option>
											<option value='3'>3</option>
											<option value='4'>4</option>
										</select>
										<label htmlFor='floatingSelectGrid'>No of travellers</label>
									</div>
								</div>
								<span className='text-center text-danger'>{this.props.error}</span>
							</div>
							<div className='container d-flex justify-content-center position-relative search-btn'>
								<Link to='/flight_search'>
									<button
										type='submit'
										className='btn btn-primary px-5'
										onClick={() => this.props.searchHandleSubmit(this.props.from, this.props.to)}>
										SEARCH
									</button>
								</Link>
							</div>
						</form>
					</div>
				</div>
				<WhyMakeMyTrip />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		airportList: state.search.airportList,
		from: state.search.from,
		to: state.search.to,
		date: state.search.date,
		travellers: state.search.travellers,
		error: state.search.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchHandleChange: (event) => dispatch(searchHandleChange(event)),
		airportDataRequest: () => dispatch(airportDataRequest()),
		searchHandleSubmit: (from, to) => dispatch(searchHandleSubmit(from, to)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearch);
