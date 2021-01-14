import React, { Component } from 'react';
import './FlightSearch.css';

import currentDate from '../CurrentDate';
import airplane from '../../images/airplane.png';

export class FlightSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dateToday: currentDate(),
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
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

					<form onSubmit={this.handleSubmit} className='pb-5 pt-3'>
						<div className='row g-2'>
							<div className='col-md'>
								<div className='form-floating'>
									<select
										className='form-select'
										id='floatingSelectGrid'
										aria-label='Floating label select example'
										defaultValue='1'>
										<option value='1'>Bengaluru</option>
										<option value='2'>GOA</option>
										<option value='3'>MUMBAI</option>
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
										defaultValue='2'>
										<option value='1'>Bengaluru</option>1<option value='2'>GOA</option>
										<option value='3'>MUMBAI</option>
									</select>
									<label htmlFor='floatingSelectGrid'>TO</label>
								</div>
							</div>
							<div className='col-md'>
								<div className='form-floating'>
									<input type='date' className='form-control' defaultValue={this.state.dateToday} />
									<label htmlFor='floatingSelectGrid'>Departure Date</label>
								</div>
							</div>
							<div className='col-md'>
								<div className='form-floating'>
									<select
										className='form-select'
										id='floatingSelectGrid'
										aria-label='Floating label select example'
										defaultValue='1'>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
									</select>
									<label htmlFor='floatingSelectGrid'>No of travellers</label>
								</div>
							</div>
						</div>
						<div className='container d-flex justify-content-center position-relative search-btn'>
							<button type='submit' className='btn btn-primary px-5'>
								SEARCH
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default FlightSearch;
