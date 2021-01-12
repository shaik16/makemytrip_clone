import React, { Component } from 'react';
import Validator from '../Validation/Validation';
import './Login.css';

class Login extends Component {
	state = {
		email: '',
		password: '',
		errors: {
			email: '',
			password: '',
		},
		validation: {
			email: 'none',
			password: 'none',
		},
	};

	handleChange = async (event) => {
		const { name, value } = event.target;
		const result = await Validator({ [name]: value });

		this.setState({ [name]: value }, () => {
			if (result !== 'success') {
				this.setState((previousState) => ({
					errors: {
						...previousState.errors,
						[name]: result,
					},
					validation: {
						...previousState.validation,
						[name]: 'is-invalid',
					},
				}));
			} else {
				this.setState((previousState) => ({
					errors: {
						...previousState.errors,
						[name]: '',
					},
					validation: {
						...previousState.validation,
						[name]: 'is-valid',
					},
				}));
			}
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		const { email: emailError, password: passwordError } = this.state.errors;
		const { email: invalidEmail, password: invalidPassword } = this.state.validation;
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
							<form onSubmit={this.handleSubmit}>
								<div class='mb-3'>
									<label for='email' class='form-label'>
										Email
									</label>
									<input
										type='email'
										class={`form-control  ${invalidEmail}`}
										id='email'
										name='email'
										aria-describedby='emailHelp'
										placeholder='Enter your email'
										onChange={this.handleChange}
										autoComplete='off'
									/>
									<div id='emailFeedback' class='invalid-feedback'>
										{emailError}
									</div>
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
										class={`form-control  ${invalidPassword}`}
										id='password'
										name='password'
										placeholder='Enter your password'
										onChange={this.handleChange}
									/>
									<div id='passwordFeedback' class='invalid-feedback'>
										{passwordError}
									</div>
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
