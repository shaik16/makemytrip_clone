import React, { Component } from 'react';
import './SearchResult.css';
import arrowIcon from '../../images/right-arrow.png';
import checkedIcon from '../../images/checked.png';
import { connect } from 'react-redux';
import { searchFlights, searchHandleChange } from '../store/actions/searchAction';

export class SearchResults extends Component {
	componentDidMount() {
		this.props.searchFlights(this.props.from, this.props.to, this.props.date);
	}

	render() {
		return (
			<div className='search-result-section bg-light'>
				<div className='search-head pt-2 pb-3'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-1'></div>
							<div className='col-md-2 col-6 text-primary rounded py-2'>
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
							<div className='col-md-2 col-6 text-primary rounded py-2'>
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
							<div className='col-md-2 col-6 text-primary rounded py-2'>
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
							<div className='col-md-2 col-6 text-primary rounded py-2'>
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
							<div className='col-md-2 col-12 text-center text-primary rounded py-2 pt-3'>
								<button type='submit' className='btn btn-primary px-5 '>
									SEARCH
								</button>
							</div>
						</div>
					</div>
				</div>

				{this.props.loading ? (
					<center>
						<img
							className='text-center'
							src='https://media.giphy.com/media/KyHbwcCQv3UxjzjeGw/giphy.gif'
							alt='Loading...'
							width='200'
							height='200'
						/>
					</center>
				) : (
					<div className='container search-body bg-light'>
						{this.props.searchResult.map((obj, index) => {
							return (
								<>
									<div className='accordion-item search-item'>
										<h2 className='accordion-header' id={index}>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target={`#collapse${index}`}
												aria-expanded='false'
												aria-controls='collapseOne'>
												<div className='row' style={{ width: '100%' }}>
													<div className='col-lg-2 .d-none .d-sm-block'></div>
													<div className='col-lg-2 col-sm-3'>
														<div className='airline d-flex'>
															<img
																src='https://media.glassdoor.com/sqll/2006190/indigo-airlines-squarelogo-1585307627941.png'
																alt='log'
																width='40'
																height='40'
															/>
															<div className='flex-column' style={{ marginLeft: '1rem' }}>
																<p>{obj.airline_name}</p>
																<p>{obj.flight_code}</p>
															</div>
														</div>
													</div>
													<div className='col-lg-2 col-sm-3 d-none d-sm-block'>
														<div className='departure-time'>
															<h5>{obj.departure_time}</h5>
															<p>{this.props.from}</p>
														</div>
													</div>
													<div className='col-lg-2 col-sm-3 d-none d-sm-block'>
														<div className='duration'>
															<p>{obj.flightDuration} mins</p>
															<hr />
															<p>Non-stop </p>
														</div>
													</div>
													<div className='col-lg-2 col-sm-2 d-none d-sm-block'>
														<div className='arrival-time'>
															<h5>{obj.arrival_time}</h5>
															<p>{this.props.to}</p>
														</div>
													</div>
													<div className='col-lg-2 d-none'></div>
												</div>
											</button>
										</h2>
										<div
											id={`collapse${index}`}
											className='accordion-collapse collapse'
											aria-labelledby='headingOne'
											// data-bs-parent='#accordionExample'
										>
											<div className='accordion-body'>
												<div className='container'>
													<div className='row mb-4 d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-xl-none text-center'>
														<div className='col-4'>
															<h5>{obj.departure_time}</h5>
															<p>{this.props.from}</p>
														</div>
														<div className='col-3'>
															<img
																src={arrowIcon}
																alt='Arrow'
																style={{
																	width: '50px',
																	height: '50px',
																}}></img>
														</div>
														<div className='col-5'>
															<div className='arrival-time'>
																<h5>{obj.arrival_time}</h5>
																<p>{this.props.to}</p>
															</div>
														</div>
													</div>
													<div className='row mb-4 d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-xl-none'>
														<div className='col-12 text-center'>
															<div className='duration'>
																<p>{obj.flightDuration} mins</p>
																<hr />
																<p>Non-stop </p>
															</div>
														</div>
													</div>
													<div className='row mb-4'>
														<div className='col-lg-12'>
															<div className='row'>
																<div className='col-lg-6'>
																	<h6>
																		<strong>Economy</strong>
																	</h6>
																	<span className='text-muted' style={{ fontSize: '13px' }}>
																		Fare offered by airline
																	</span>
																	<div className='economy d-flex justify-content-between'>
																		<div className='list-items'>
																			<div className='mt-1 mb-1'>
																				<img src={checkedIcon} width='15' height='15' alt='tick' />
																				<p className='d-inline px-2'>
																					Cabin baggage 7 Kgs, Check-in baggage included
																				</p>
																			</div>
																			<div className='mt-1 mb-1'>
																				<img src={checkedIcon} width='15' height='15' alt='tick' />
																				<p className='d-inline px-2'>
																					Cancellation fee starting ₹ 3,500
																				</p>
																			</div>
																			<div className='mt-1 mb-1'>
																				<img src={checkedIcon} width='15' height='15' alt='tick' />
																				<p className='d-inline px-2'>
																					Date change fee starting ₹ 3,000
																				</p>
																			</div>
																			<div className='mt-1 mb-1'>
																				<img src={checkedIcon} width='15' height='15' alt='tick' />
																				<p className='d-inline px-2'>Free seats available</p>
																			</div>
																		</div>
																	</div>
																</div>
																<div className='col-md-2'>
																	<h2 className='pt-2 text-center'>
																		<strong> &#8377; {obj.price}</strong>
																	</h2>
																</div>
																<div className='col-md-4 text-center pt-3'>
																	<button className='btn btn-primary book-now'>BOOK NOW</button>
																</div>
															</div>
														</div>
													</div>
													<hr />
													<div className='row mt-4'>
														<div className='col-lg-12'>
															<div className='row'>
																<div className='col-lg-6'>
																	<h6>
																		<strong>Business</strong>
																	</h6>
																	<span className='text-muted' style={{ fontSize: '13px' }}>
																		Fare offered by airline
																	</span>
																	<div className='economy d-flex justify-content-between'>
																		<div className='list-items'>
																			<div className='mt-1 mb-1'>
																				<img src={checkedIcon} width='15' height='15' alt='tick' />
																				<p className='d-inline px-2'>
																					Cabin baggage 7 Kgs, Check-in baggage included
																				</p>
																			</div>
																			<div className='mt-1 mb-1'>
																				<img src={checkedIcon} width='15' height='15' alt='tick' />
																				<p className='d-inline px-2'>
																					Cancellation fee starting ₹ 3,500
																				</p>
																			</div>
																			<div className='mt-1 mb-1'>
																				<img src={checkedIcon} width='15' height='15' alt='tick' />
																				<p className='d-inline px-2'>
																					Date change fee starting ₹ 3,000
																				</p>
																			</div>
																			<div className='mt-1 mb-1'>
																				<img src={checkedIcon} width='15' height='15' alt='tick' />
																				<p className='d-inline px-2'>Free seats available</p>
																			</div>
																		</div>
																	</div>
																</div>
																<div className='col-md-2'>
																	<h2 className='pt-2 text-center'>
																		<strong> &#8377; 10,665</strong>
																	</h2>
																</div>
																<div className='col-md-4 text-center pt-3'>
																	<button className='btn btn-primary book-now'>BOOK NOW</button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<br />
								</>
							);
						})}
					</div>
				)}
			</div>
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
		searchResult: state.search.searchResult,
		loading: state.search.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchHandleChange: (event) => dispatch(searchHandleChange(event)),
		searchFlights: (from, to, date) => dispatch(searchFlights(from, to, date)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
