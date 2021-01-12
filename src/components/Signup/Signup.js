import React, { Component } from 'react';
import Validator from '../Validation/Validation';
import apiRequest from '../apiRequest/apiRequest';
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
		isValid: false,
		validation: {
			name: 'none',
			email: 'none',
			password: 'none',
			confirmPassword: 'none',
		},
		authError: '',
		authStatus: false,
		successMessage: '',
		successStatus: false,
		buttonStatus: 'signup',
	};

	handleChange = async (event) => {
		const { name, value } = event.target;
		const { name: nameState, email, password, confirmPassword } = this.state;
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
					isValid: false,
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
				if (
					nameState.length > 0 &&
					email.length > 0 &&
					password.length > 0 &&
					confirmPassword.length > 0
				) {
					this.setState({
						isValid: true,
					});
				}
			}
		});
	};

	handleSubmit = async (event) => {
		try {
			event.preventDefault();
			this.setState({
				buttonStatus: 'please wait ...',
			});
			const { name, email, password, confirmPassword } = this.state;
			const result = await apiRequest({
				method: 'post',
				url: '/signup',
				data: {
					name,
					email,
					password,
					confirmPassword,
				},
			});

			this.setState({
				successStatus: true,
				successMessage: result.data.message,
			});
		} catch (err) {
			console.log(err.response);
			this.setState({
				authStatus: true,
				authError: err.response.data.message,
				buttonStatus: 'signup',
			});

			setTimeout(() => {
				this.setState({
					authStatus: false,
					authError: '',
				});
			}, 4000);
		}
	};

	render() {
		const { isValid, authError, authStatus, buttonStatus } = this.state;
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
				className='modal fade'
				id='signUpBackdrop'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabindex='-1'
				aria-labelledby='signUpBackdropLabel'
				aria-hidden='true'>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='signUpBackdropLabel'>
								Signup
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						{this.state.successStatus ? (
							<div class='alert alert-success' role='alert'>
								{this.state.successMessage}
							</div>
						) : (
							<div className='modal-body'>
								<div
									className='alert alert-danger'
									role='alert'
									style={{ display: `${authStatus ? 'block' : 'none'}` }}>
									{authError}
								</div>
								<form onSubmit={this.handleSubmit}>
									<div className='mb-3'>
										<label for='name' className='form-label'>
											Name
										</label>
										<input
											type='text'
											className={`form-control  ${invalidName}`}
											id='name'
											aria-describedby='nameHelp'
											name='name'
											placeholder='Enter your name'
											onChange={this.handleChange}
										/>
										<div id='nameFeedback' className='invalid-feedback'>
											{nameError}
										</div>
									</div>
									<div className='mb-3'>
										<label for='email' className='form-label'>
											Email
										</label>
										<input
											type='email'
											className={`form-control  ${invalidEmail}`}
											id='email'
											aria-describedby='emailHelp'
											name='email'
											placeholder='Enter your email'
											onChange={this.handleChange}
										/>
										<div id='emailFeedback' className='invalid-feedback'>
											{emailError}
										</div>
										<div id='emailHelp' className='form-text'>
											We'll never share your email with anyone else.
										</div>
									</div>
									<div className='mb-3'>
										<label for='password' className='form-label'>
											Password
										</label>
										<input
											type='password'
											className={`form-control  ${invalidPassword}`}
											id='password'
											name='password'
											placeholder='Enter your password'
											onChange={this.handleChange}
										/>
										<div id='passFeedback' className='invalid-feedback'>
											{passwordError}
										</div>
									</div>
									<div className='mb-3'>
										<label for='confirmPassword' className='form-label'>
											Confirm Password
										</label>
										<input
											type='password'
											className={`form-control  ${invalidConfirmPassword}`}
											id='confirmPassword'
											name='confirmPassword'
											placeholder='Re-enter your password'
											onChange={this.handleChange}
										/>
										<div id='passFeedback' className='invalid-feedback'>
											{confirmPasswordError}
										</div>
									</div>
									<button
										type='submit'
										className='btn btn-primary px-5'
										disabled={isValid ? false : true}>
										{buttonStatus}
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
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
