import React, { Component } from 'react';
import './ReviewBooking.css';

import GeneralInstructions from '../GeneralInstructions/GeneralInstructions.js';

import airplane from '../../images/aeroplane-sm.png';

export class ReviewBooking extends Component {
	render() {
		return (
			<>
				<div className='search-result-section bg-light'>
					<div className='search-head pt-4 pb-4'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-3'>
									<h4>Review your booking</h4>
								</div>
								<div className='col-lg-6 mt-2'>
									<div class='progress'>
										<div
											class='progress-bar'
											role='progressbar'
											style={{ width: '25%' }}
											aria-valuenow='25'
											aria-valuemin='0'
											aria-valuemax='100'>
											Flight Selected
										</div>
										<div
											class='progress-bar bg-success'
											role='progressbar'
											style={{ width: '25%' }}
											aria-valuenow='25'
											aria-valuemin='0'
											aria-valuemax='100'>
											Review Booking
										</div>
										<div
											class='progress-bar bg-info'
											role='progressbar'
											style={{ width: '25%' }}
											aria-valuenow='25'
											aria-valuemin='0'
											aria-valuemax='100'></div>
										<div
											class='progress-bar bg-secondary'
											role='progressbar'
											style={{ width: '25%' }}
											aria-valuenow='25'
											aria-valuemin='0'
											aria-valuemax='100'></div>
									</div>
								</div>
								<div className='col-lg-3'>
									<button type='submit' className='btn btn-primary px-5 '>
										Continue Booking
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container mt-5 ' style={{ backgroundColor: '#ffffff' }}>
					<div className='row'>
						<div className='col-lg-9'>
							<div className='card bg-boxshadow'>
								<div className='card-header p-4' style={{ backgroundColor: '#ffffff' }}>
									<div className='row'>
										<div className='col-lg-12'>
											<img src={airplane} alt='Airplane'></img>
											<span className='mx-2'>
												CCU-BLR | Fri 15 Jan | 6 hrs 50 mins | Premium Economy
											</span>
										</div>
									</div>
								</div>
								<div className='card-body p-5'>
									<div className='row'>
										<div className='col-lg-2'>
											<div className='airline d-flex'>
												<img
													src='https://media.glassdoor.com/sqll/2006190/indigo-airlines-squarelogo-1585307627941.png'
													alt='log'
													width='40'
													height='40'
												/>
												<div className='flex-column' style={{ marginLeft: '1rem' }}>
													<p>Indigo</p>
													<p>6E-529</p>
												</div>
											</div>
										</div>
										<div className='col-lg-3'>
											<div className='departure-time'>
												<p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>20:45</p>
												<p
													style={{
														fontWeight: 'bold',
														fontSize: '0.8rem',
													}}>
													Fri, 15 Jan 21
												</p>
												<p style={{ fontSize: '0.8rem' }}>Kolkata</p>
												<p style={{ fontSize: '0.8rem' }}>
													Netaji Subhash Chandra Bose International Airport
												</p>
											</div>
										</div>
										<div className='col-lg-2' style={{ marginLeft: '-3rem', marginRight: '2rem' }}>
											<div className='duration text-center'>
												<p>01 hr 20 mins</p>
												<hr />
												<p>Non-stop </p>
											</div>
										</div>
										<div className='col-lg-3'>
											<div className='arrival-time'>
												<p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>22:10</p>
												<p
													style={{
														fontWeight: 'bold',
														fontSize: '0.8rem',
													}}>
													Fri, 15 Jan 21
												</p>
												<p style={{ fontSize: '0.8rem' }}>Bangalore</p>
												<p style={{ fontSize: '0.8rem' }}>Kempegowda International Airport</p>
											</div>
										</div>
										<div className='col-lg-2'>
											<p style={{ fontWeight: 'bold', fontSize: '1rem' }}>Fare Type</p>
											<p style={{ fontSize: '0.8rem' }}>Premium Economy</p>
											<p style={{ fontWeight: 'bold', fontSize: '1rem' }}>Luggage</p>
											<p style={{ fontSize: '0.8rem' }}>20Kgs</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='card bg-boxshadow'>
								<div className='card-body'>
									<div className='row mb-2'>
										<label>Base Fare</label>
										<div className='col-lg-8'>Adult(s) (1 X &#8377; 8,479): </div>
										<div className='col-lg-4'>&#8377; 8,479</div>
									</div>
									<hr />
									<div className='row mt-2 mb-2'>
										<label>Fee & Surcharges</label>
										<div className='col-lg-8'>Total fee & surcharges: </div>
										<div className='col-lg-4'>&#8377; 2,186</div>
									</div>
									<hr />
									<div className='row mt-2 mb-2'>
										<label>Other Services</label>
										<div className='col-lg-8'>Charity</div>
										<div className='col-lg-4'>&#8377; 10</div>
									</div>
									<hr />
									<div className='row mt-2 mb-2'>
										<div className='col-lg-6'>
											{' '}
											<label>Total Amount</label>
										</div>
										<div className='col-lg-6'>
											<h3>
												<strong>&#8377; 10,675</strong>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<GeneralInstructions />
			</>
		);
	}
}

export default ReviewBooking;
