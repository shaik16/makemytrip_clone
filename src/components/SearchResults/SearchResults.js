import React, { Component } from 'react';
import './SearchResult.css';

export class SearchResults extends Component {
	render() {
		return (
			<div className='search-result-section bg-light'>
				<div className='search-head pt-2 pb-3'>
					<div className='container'>
						<div className='row'>
							<div className=' col-md head-info-box text-primary rounded py-2'>
								<span>From</span>
								<h6 className='text-light'>Bengaluru,india</h6>
							</div>
							<div className='col-md head-info-box text-primary rounded py-2'>
								<span>TO</span>
								<h6 className='text-light'>Goa,india</h6>
							</div>
							<div className='col-md head-info-box text-primary rounded py-2'>
								<span>DEPART</span>
								<h6 className='text-light'>Thu,jan14,2021</h6>
							</div>
							<div className='col-md head-info-box text-primary rounded py-2'>
								<span>TRAVELLERS</span>
								<h6 className='text-light'>3</h6>
							</div>
						</div>
					</div>
				</div>
				<div className='container search-body bg-light'>
					<div className='accordion-item search-item'>
						<h2 className='accordion-header' id='headingOne'>
							<button
								className='accordion-button'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapseOne'
								aria-expanded='true'
								aria-controls='collapseOne'>
								<div className='d-flex justify-content-around align-items-center w-100'>
									<div className='airline d-flex justify-content-between'>
										<img
											src='https://media.glassdoor.com/sqll/2006190/indigo-airlines-squarelogo-1585307627941.png'
											alt='log'
											width='40'
											height='40'
										/>
										<div className='d-flex flex-column px-2'>
											<p>indigo</p>
											<p>6E-529</p>
										</div>
									</div>
									<div className='time-estimate d-flex  justify-content-between'>
										<div className='departure-time'>
											<h5>20:45</h5>
											<p>Bengaluru</p>
										</div>
										<div className='duration'>
											<p>01 hr 20 mins</p>
											<hr />
											<p>Non-stop </p>
										</div>
										<div className='arrival-time'>
											<h5>22:10</h5>
											<p>Bengaluru</p>
										</div>
									</div>
								</div>
							</button>
						</h2>
						<div
							id='collapseOne'
							className='accordion-collapse collapse show'
							aria-labelledby='headingOne'
							data-bs-parent='#accordionExample'>
							<div className='accordion-body'>
								<div className='container'>
									<h6>Economy</h6>
									<span className='text-muted'>Fare offered by airline</span>
									<div className='economy d-flex justify-content-between'>
										<div className='list-items'>
											<div>
												<img
													src={`${process.env.PUBLIC_URL}/check.svg`}
													width='15'
													height='15'
													alt='tick'
												/>
												<p className='d-inline px-2'>
													Cabin baggage 7 Kgs, Check-in baggage included
												</p>
											</div>
											<div>
												<img
													src={`${process.env.PUBLIC_URL}/check.svg`}
													width='15'
													height='15'
													alt='tick'
												/>
												<p className='d-inline px-2'>Cancellation fee starting ₹ 3,500</p>
											</div>
											<div>
												<img
													src={`${process.env.PUBLIC_URL}/check.svg`}
													width='15'
													height='15'
													alt='tick'
												/>
												<p className='d-inline px-2'>Date change fee starting ₹ 3,000</p>
											</div>
											<div>
												<img
													src={`${process.env.PUBLIC_URL}/check.svg`}
													width='15'
													height='15'
													alt='tick'
												/>
												<p className='d-inline px-2'>Free seats available</p>
											</div>
										</div>
										<button className='btn btn-primary book-now'>BOOK NOW</button>
									</div>
									<br />
									<hr />
									<br />
									<h6>Business</h6>
									<span className='text-muted'>Fare offered by airline</span>
									<div className='economy d-flex justify-content-between'>
										<div className='list-items'>
											<div>
												<img
													src={`${process.env.PUBLIC_URL}/check.svg`}
													width='15'
													height='15'
													alt='tick'
												/>
												<p className='d-inline px-2'>
													Cabin baggage 7 Kgs, Check-in baggage included
												</p>
											</div>
											<div>
												<img
													src={`${process.env.PUBLIC_URL}/check.svg`}
													width='15'
													height='15'
													alt='tick'
												/>
												<p className='d-inline px-2'>Cancellation fee starting ₹ 3,500</p>
											</div>
											<div>
												<img
													src={`${process.env.PUBLIC_URL}/check.svg`}
													width='15'
													height='15'
													alt='tick'
												/>
												<p className='d-inline px-2'>Date change fee starting ₹ 3,000</p>
											</div>
											<div>
												<img
													src={`${process.env.PUBLIC_URL}/check.svg`}
													width='15'
													height='15'
													alt='tick'
												/>
												<p className='d-inline px-2'>Free seats available</p>
											</div>
										</div>
										<button className='btn btn-primary book-now'>BOOK NOW</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchResults;
