import React, { Component } from 'react';
import Validator from '../Validation/Validation';
import apiRequest from '../apiRequest/apiRequest';
import './Login.css';

class Login extends Component {
	state = {
		email: '',
		password: '',
		errors: {
			email: '',
			password: '',
		},
		isValid: false,
		validation: {
			email: 'none',
			password: 'none',
		},
		buttonStatus: 'Login',
		authError: '',
		authStatus: false,
		isLoggedIn: false,
	};

	handleChange = async (event) => {
		const { name, value } = event.target;
		const { email, password } = this.state;
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
				if (email.length > 0 && password.length > 0) {
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
			const { email, password } = this.state;
			const result = await apiRequest({
				method: 'post',
				url: '/login',
				data: {
					email,
					password,
				},
			});

			const { id, accessToken } = result.data;
			localStorage.setItem('user_id', id);
			localStorage.setItem('accessToken', accessToken);
			this.setState({
				isLoggedIn: true,
			});
		} catch (err) {
			console.log(err.response);
			this.setState({
				authStatus: true,
				authError: err.response.data.message,
				buttonStatus: 'login',
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
		const { isValid, buttonStatus, authError, authStatus } = this.state;
		const { email: emailError, password: passwordError } = this.state.errors;
		const { email: invalidEmail, password: invalidPassword } = this.state.validation;
		return (
			<div
				className='modal fade'
				id='loginBackdrop'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabindex='-1'
				aria-labelledby='loginBackdropLabel'
				aria-hidden='true'>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='loginBackdropLabel'>
								Login
							</h5>
							<button
								type='button'
								class='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						{this.state.isLoggedIn ? (
							<div class='alert alert-success' role='alert'>
								successfully logged in
							</div>
						) : (
							<div class='modal-body'>
								<div
									class='alert alert-danger'
									role='alert'
									style={{ display: `${authStatus ? 'block' : 'none'}` }}>
									{authError}
								</div>
								<form onSubmit={this.handleSubmit}>
									<div className='mb-3'>
										<label for='email' className='form-label'>
											Email
										</label>
										<input
											type='email'
											className={`form-control  ${invalidEmail}`}
											id='email'
											name='email'
											aria-describedby='emailHelp'
											placeholder='Enter your email'
											onChange={this.handleChange}
											autoComplete='off'
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
										<div id='passwordFeedback' className='invalid-feedback'>
											{passwordError}
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
										data-bs-target='#signUpBackdrop'
										data-bs-dismiss='modal'>
										Don't have an account ! signup
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

export default Login;
