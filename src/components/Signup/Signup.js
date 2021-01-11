import React, { Component } from 'react';
import './Signup.css';

export class Signup extends Component {
	render() {
		return (
			<div
				class='modal fade'
				id='signUpBackdrop'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabindex='-1'
				aria-labelledby='signUpBackdropLabel'
				aria-hidden='true'>
				<div class='modal-dialog modal-dialog-centered'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title' id='signUpBackdropLabel'>
								Signup
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
									<label for='name' class='form-label'>
										Name
									</label>
									<input
										type='text'
										class='form-control'
										id='name'
										aria-describedby='emailHelp'
										name='name'
										placeholder='Enter your name'
									/>
								</div>
								<div class='mb-3'>
									<label for='email' class='form-label'>
										Email
									</label>
									<input
										type='email'
										class='form-control'
										id='email'
										aria-describedby='emailHelp'
										name='email'
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
								<div class='mb-3'>
									<label for='password' class='form-label'>
										Confirm Password
									</label>
									<input
										type='password'
										class='form-control'
										id='confirmPassword'
										name='confirmPassword'
										placeholder='Re-enter your password'
									/>
								</div>
								<button type='submit' class='btn btn-primary px-5'>
									Signup
								</button>
								<a
									href='.'
									className='float-end mt-1'
									data-bs-toggle='modal'
									data-bs-target='#loginBackdrop'
									data-bs-dismiss='modal'>
									Already have an account! login
								</a>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
