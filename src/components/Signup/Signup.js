import React, { Component } from 'react';
import Validator from '../Validation/Validation';
import './Signup.css';

export class Signup extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		errors: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validation: {
			name: 'none',
			email: 'none',
			password: 'none',
			confirmPassword: 'none',
		},
	};

	handleChange = async (event) => {
		const { name, value } = event.target;
		let result;

		if (name === 'confirmPassword') {
			result = await Validator({ [name]: value, password: this.state.password });
		} else {
			result = await Validator({ [name]: value });
		}

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
		const {
			name: nameError,
			email: emailError,
			password: passwordError,
			confirmPassword: confirmPasswordError,
		} = this.state.errors;
		const {
			name: invalidName,
			email: invalidEmail,
			password: invalidPassword,
			confirmPassword: invalidConfirmPassword,
		} = this.state.validation;

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
							<form onSubmit={this.handleSubmit}>
								<div class='mb-3'>
									<label for='name' class='form-label'>
										Name
									</label>
									<input
										type='text'
										class={`form-control  ${invalidName}`}
										id='name'
										aria-describedby='nameHelp'
										name='name'
										placeholder='Enter your name'
										onChange={this.handleChange}
									/>
									<div id='nameFeedback' class='invalid-feedback'>
										{nameError}
									</div>
								</div>
								<div class='mb-3'>
									<label for='email' class='form-label'>
										Email
									</label>
									<input
										type='email'
										class={`form-control  ${invalidEmail}`}
										id='email'
										aria-describedby='emailHelp'
										name='email'
										placeholder='Enter your email'
										onChange={this.handleChange}
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
									<div id='passFeedback' class='invalid-feedback'>
										{passwordError}
									</div>
								</div>
								<div class='mb-3'>
									<label for='confirmPassword' class='form-label'>
										Confirm Password
									</label>
									<input
										type='password'
										class={`form-control  ${invalidConfirmPassword}`}
										id='confirmPassword'
										name='confirmPassword'
										placeholder='Re-enter your password'
										onChange={this.handleChange}
									/>
									<div id='passFeedback' class='invalid-feedback'>
										{confirmPasswordError}
									</div>
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
