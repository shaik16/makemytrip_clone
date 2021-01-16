import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loggedOut } from '../store/actions/loginAction';

class Header extends Component {
	render() {
		console.log(this.props.isLoggedIn);
		return (
			<nav className='navbar sticky-top navbar-light bg-light'>
				<div className='container'>
					<Link to='/' className='navbar-brand'>
						<img src={`${process.env.PUBLIC_URL}/logo.png`} alt='logo' width='120' height='40' />
					</Link>
					<div className='d-flex'>
						{this.props.isLoggedIn ? (
							<div className='dropdown ms-2'>
								<button
									className='btn btn-primary dropdown-toggle'
									type='button'
									id='dropdownMenuButton'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									User name
								</button>
								<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
									<li>
										<Link to='/profile' className='dropdown-item' href='.'>
											My Profile
										</Link>
									</li>
									<li>
										<Link to='/mytrips' className='dropdown-item' href='.'>
											My Trips
										</Link>
									</li>
									<li>
										<p className='dropdown-item' role='button' onClick={this.props.loggedOut}>
											Logout
										</p>
									</li>
								</ul>
							</div>
						) : (
							<>
								<button
									type='button'
									className='btn btn-primary px-4'
									data-bs-toggle='modal'
									data-bs-target='#loginBackdrop'>
									Login
								</button>
								<button
									type='button'
									className='btn btn-primary px-4 ms-2'
									data-bs-toggle='modal'
									data-bs-target='#signUpBackdrop'>
									Signup
								</button>
							</>
						)}
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.login.isLoggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loggedOut: () => dispatch(loggedOut()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
