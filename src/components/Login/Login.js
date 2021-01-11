import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
	render() {
		return (
			<div
				class='modal fade'
				id='loginBackdrop'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabindex='-1'
				aria-labelledby='loginBackdropLabel'
				aria-hidden='true'>
				<div class='modal-dialog modal-dialog-centered'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title' id='loginBackdropLabel'>
								Login
							</h5>
							<button
								type='button'
								class='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div class='modal-body'>
							<form>
								<div class='mb-3'>
									<label for='email' class='form-label'>
										Email
									</label>
									<input
										type='email'
										class='form-control'
										id='email'
										name='email'
										aria-describedby='emailHelp'
										placeholder='Enter your email'
									/>
									<div id='emailHelp' class='form-text'>
										We'll never share your email with anyone else.
									</div>
								</div>
								<div class='mb-3'>
									<label for='password' class='form-label'>
										Password
									</label>
									<input
										type='password'
										class='form-control'
										id='password'
										name='password'
										placeholder='Enter your password'
									/>
								</div>
								<button type='submit' class='btn btn-primary px-5'>
									Login
								</button>
								<a
									href='.'
									className='float-end mt-1'
									data-bs-toggle='modal'
									data-bs-target='#signUpBackdrop'
									data-bs-dismiss='modal'>
									Don't have an account ! signup
								</a>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
