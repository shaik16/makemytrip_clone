import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Booking extends Component {
	render() {
		return (
			<>
				<div className='search-result-section bg-light'>
					<div className='search-head pt-4 pb-4'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-3'>
									<h4>Traveller Details</h4>
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
											aria-valuemax='100'>
											Traveller Details
										</div>
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
									<Link to='/booking_success'>
										<button type='submit' className='btn btn-primary px-5 '>
											Confirm Booking
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container mt-5 ' style={{ backgroundColor: '#ffffff' }}>
					<div className='row'>
						<div className='col-lg-9'>
							<div className='card bg-boxshadow'>
								<div className='accordion-item search-item' style={{ width: '100%' }}>
									<h2 className='accordion-header' id='headingOne'>
										<button
											className='accordion-button'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseOne'
											aria-expanded='false'
											aria-controls='collapseOne'>
											<div className='row' style={{ width: '100%' }}>
												<div className='col-lg-3'>
													<div className='departure-time'>
														<h5>Kolkata - Bengaluru</h5>
														<p>Departure Fri, 15 Jan</p>
													</div>
												</div>
												<div className='col-lg-9 text-end mt-2'>Flight Details</div>
											</div>
										</button>
									</h2>
									<div id='collapseOne' className='accordion-collapse' aria-labelledby='headingOne'>
										<div className='accordion-body'>
											<div className='container'>
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
															<p
																style={{
																	fontWeight: 'bold',
																	fontSize: '1.2rem',
																}}>
																20:45
															</p>
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
													<div
														className='col-lg-2'
														style={{ marginLeft: '-3rem', marginRight: '2rem' }}>
														<div className='duration text-center'>
															<p>01 hr 20 mins</p>
															<hr />
															<p>Non-stop </p>
														</div>
													</div>
													<div className='col-lg-3'>
														<div className='arrival-time'>
															<p
																style={{
																	fontWeight: 'bold',
																	fontSize: '1.2rem',
																}}>
																22:10
															</p>
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
					<div className='row'>
						<div className='col-lg-9'>
							<h4>Traveller Details</h4>
							<div className='card bg-boxshadow p-3'>
								<div className='card-body'>
									<form>
										<div className='row'>
											<div className='col-lg-12'>
												<p>
													<strong>
														IMPORTANT: Enter your name as it is mentioned on your passport or any
														government approved ID.
													</strong>
												</p>
											</div>
										</div>
										<div className='row mt-3'>
											<div className='col-lg-4'>
												<input
													type='text'
													className='form-control'
													placeholder='First & middle name'
												/>
											</div>
											<div className='col-lg-4'>
												<input type='text' className='form-control' placeholder='Last name' />
											</div>
											<div className='col-lg-4'>
												<select className='form-control'>
													<option value='0'>Select gender</option>
													<option value='1'>Male</option>
													<option value='2'>Female</option>
												</select>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className='col-lg-3 mt-5 text-center'>
							<div className='row'>
								<div className='col-lg-12'>
									<Link to='/booking_success'>
										<button type='submit' className='btn btn-primary px-5 '>
											Confirm Booking
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='row mt-4 mb-5'>
						<div className='col-lg-9'>
							<h4>Contact Information</h4>
							<div className='card bg-boxshadow p-3'>
								<div className='card-body'>
									<form>
										<div className='row'>
											<div className='col-lg-12'>
												<p>Your ticket and flights information will be sent here.</p>
											</div>
										</div>
										<div className='row mt-3'>
											<div className='col-lg-4'>
												<label>Country</label>
												<select className='form-select' defaultValue='1'>
													<option value='1'>India</option>
												</select>
											</div>
											<div className='col-lg-4'>
												<label>Mobile No.</label>
												<input type='number' className='form-control' placeholder='Mobile number' />
											</div>
											<div className='col-lg-4'>
												<label>Email</label>
												<input type='email' className='form-control' placeholder='Email' />
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Booking;
