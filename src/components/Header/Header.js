import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className='navbar sticky-top navbar-light bg-light'>
				<div className='container'>
					<a className='navbar-brand' href='/'>
						<img src={`${process.env.PUBLIC_URL}/logo.png`} alt='logo' width='120' height='40' />
					</a>
					<div className='d-flex'>
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
									<a className='dropdown-item' href='.'>
										My Profile
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='.'>
										My Trips
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='.'>
										Logout
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
