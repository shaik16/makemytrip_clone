import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav class='navbar sticky-top navbar-light bg-light'>
				<div class='container'>
					<a class='navbar-brand' href='/'>
						<img src={`${process.env.PUBLIC_URL}/logo.png`} alt='logo' width='120' height='40' />
					</a>
					<div class='d-flex'>
						<button
							type='button'
							class='btn btn-primary px-4'
							data-bs-toggle='modal'
							data-bs-target='#loginBackdrop'>
							Login
						</button>
						<button
							type='button'
							class='btn btn-primary px-4 ms-2'
							data-bs-toggle='modal'
							data-bs-target='#signUpBackdrop'>
							Signup
						</button>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
