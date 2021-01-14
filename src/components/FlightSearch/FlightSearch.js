import React, { Component } from 'react';
import './FlightSearch.css';
export class FlightSearch extends Component {
	// state = {
	// 	isSearchOpen: false,
	// };

	// openSearchBox = () => {
	// 	if (!this.state.isSearchOpen) {
	// 		document.addEventListener('click', this.closeSearchBox, false);
	// 	} else {
	// 		document.removeEventListener('click', this.closeSearchBox, false);
	// 	}
	// 	this.setState((previousState) => ({
	// 		isSearchOpen: !previousState.isSearchOpen,
	// 	}));
	// };

	// closeSearchBox = (e) => {
	// 	if (this.node.contains(e.target)) {
	// 		return;
	// 	}
	// 	this.openSearchBox();
	// };

	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<div className='flight-search-section'>
				<div className='container  bg-light  rounded-3 px-5'>
					<div className='container w-25 position-relative bg-light border rounded-3 flight-icon'>
						<div
							className='pt-2 d-flex 
						flex-column 
						align-items-center b
						border border-3 border-primary 
						border-top-0 
						border-start-0
						border-end-0'>
							<img
								src={`${process.env.PUBLIC_URL}/airplane.svg`}
								alt='fight-logo'
								height='50'
								width='50'
							/>
							<h6>Flights</h6>
						</div>
					</div>
					{/* <div className='form-check pt-2 pb-3 ms-2'>
						<input
							className='form-check-input'
							type='radio'
							name='flexRadioDefault'
							id='flexRadioDefault2'
							checked
						/>
						<label class='form-check-label' for='flexRadioDefault2'>
							ONEWAY
						</label>
					</div>
					<div
						className='container pb-5'
						ref={(node) => {
							this.node = node;
						}}>
						<div className='row'>
							<div
								className='col-sm border rounded-start homeSearch'
								role='button'
								onClick={this.openSearchBox}>
								<h5 className='text-muted'>FROM</h5>
								<h2 className='fw-bold'>Banglore</h2>
								BLR,Bengaluru Internation Airports
								<div
									className='bg-light 
								position-absolute 
								border
								search-box rounded-1
								search-box'
									style={{ display: `${this.state.isSearchOpen ? 'block' : 'none'}` }}>
									<input
										className='form-control me-2'
										type='search'
										placeholder='Search'
										aria-label='Search'
									/>
									<div>
										<p className='lh-2 search-element'>
											Banglore , India <br />
											<span className='text-muted'>Bengluru international Airport</span>
										</p>
										<p className='lh-2 search-element'>
											Banglore , India <br />
											<span className='text-muted'>Bengluru international Airport</span>
										</p>
									</div>
								</div>
							</div>
							<div className='col-sm border homeSearch' role='button' onClick={this.openSearchBox}>
								<h5 className='text-muted'>TO</h5>
								<h2 className='fw-bold'>Goa</h2>
								GOI, Dabolim Airport India
								<div
									className='bg-light 
								position-absolute 
								border
								search-box rounded-1
								search-box'
									style={{ display: `${this.state.isSearchOpen ? 'block' : 'none'}` }}>
									<input
										className='form-control me-2'
										type='search'
										placeholder='Search'
										aria-label='Search'
									/>
									<div>
										<p className='lh-2 search-element'>
											Banglore , India <br />
											<span className='text-muted'>Bengluru international Airport</span>
										</p>
										<p className='lh-2 search-element'>
											Banglore , India <br />
											<span className='text-muted'>Bengluru international Airport</span>
										</p>
									</div>
								</div>
							</div>
							<div className='col-sm border homeSearch' role='button'>
								<h5 className='text-muted'>DEPARTURE</h5>
								<h2 className='fw-bold'>12</h2>
								Jan 21 , Tuesday
							</div>
							<div className='col-sm border rounded-end homeSearch' role='button'>
								<h5 className='text-muted'>TRAVELLERS</h5>
								<h2 className='fw-bold'>3 Travellers</h2>
							</div>
						</div>
					</div> */}
					<form onSubmit={this.handleSubmit} className='pb-5 pt-5'>
						<div class='row g-2'>
							<div class='col-md'>
								<div class='form-floating'>
									<select
										class='form-select'
										id='floatingSelectGrid'
										aria-label='Floating label select example'>
										<option selected>Bengaluru</option>
										<option value='1'>Bengaluru</option>
										<option value='2'>GOA</option>
										<option value='3'>MUMBAI</option>
									</select>
									<label for='floatingSelectGrid'>FROM</label>
								</div>
							</div>
							<div class='col-md'>
								<div class='form-floating'>
									<select
										class='form-select'
										id='floatingSelectGrid'
										aria-label='Floating label select example'>
										<option selected>GOA</option>
										<option value='1'>Bengaluru</option>
										<option value='2'>GOA</option>
										<option value='3'>MUMBAI</option>
									</select>
									<label for='floatingSelectGrid'>TO</label>
								</div>
							</div>
							<div class='col-md'>
								<div class='form-floating'>
									<input type='date' />
								</div>
							</div>
							<div class='col-md'>
								<div class='form-floating'>
									<select
										class='form-select'
										id='floatingSelectGrid'
										aria-label='Floating label select example'>
										<option selected>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
									</select>
									<label for='floatingSelectGrid'>No of travellers</label>
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
