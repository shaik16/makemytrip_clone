import React, { Component } from 'react';
import './FlightSearch.css';

export class FlightSearch extends Component {
	state = {
		isSearchOpen: false,
	};

	openSearchBox = () => {
		if (!this.state.isSearchOpen) {
			document.addEventListener('click', this.closeSearchBox, false);
		} else {
			document.removeEventListener('click', this.closeSearchBox, false);
		}
		this.setState((previousState) => ({
			isSearchOpen: !previousState.isSearchOpen,
		}));
	};

	closeSearchBox = (e) => {
		if (this.node.contains(e.target)) {
			return;
		}
		this.openSearchBox();
	};

	render() {
		return (
			<div>
				<div className='container  bg-light mt-5 rounded-3 px-5'>
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
					<div className='form-check pt-2 pb-3 ms-2'>
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
					</div>
				</div>
			</div>
		);
	}
}

export default FlightSearch;
