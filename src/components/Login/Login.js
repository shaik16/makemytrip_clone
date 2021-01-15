import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { onSubmit, validateChange } from '../store/actions/loginAction';

class Login extends Component {
	// state = {
	// 	email: '',
	// 	password: '',
	// 	errors: {
	// 		email: '',
	// 		password: '',
	// 	},
	// 	isValid: false,
	// 	validation: {
	// 		email: 'none',
	// 		password: 'none',
	// 	},
	// 	buttonStatus: 'Login',
	// 	authError: '',
	// 	authStatus: false,
	// 	isLoggedIn: false,
	// };

	// handleChange = async (event) => {
	// 	const { name, value } = event.target;
	// 	const { email, password } = this.state;
	// 	const result = await Validator({ [name]: value });

	// 	this.setState({ [name]: value }, () => {
	// 		if (result !== 'success') {
	// 			this.setState((previousState) => ({
	// 				errors: {
	// 					...previousState.errors,
	// 					[name]: result,
	// 				},
	// 				validation: {
	// 					...previousState.validation,
	// 					[name]: 'is-invalid',
	// 				},
	// 				isValid: false,
	// 			}));
	// 		} else {
	// 			this.setState((previousState) => ({
	// 				errors: {
	// 					...previousState.errors,
	// 					[name]: '',
	// 				},
	// 				validation: {
	// 					...previousState.validation,
	// 					[name]: 'is-valid',
	// 				},
	// 			}));
	// 			if (email.length > 0 && password.length > 0) {
	// 				this.setState({
	// 					isValid: true,
	// 				});
	// 			}
	// 		}
	// 	});
	// };

	// handleSubmit = async (event) => {
	// 	try {
	// 		event.preventDefault();
	// 		this.setState({
	// 			buttonStatus: 'please wait ...',
	// 		});
	// 		const { email, password } = this.state;
	// 		const result = await apiRequest({
	// 			method: 'post',
	// 			url: '/login',
	// 			data: {
	// 				email,
	// 				password,
	// 			},
	// 		});

	// 		const { id, accessToken } = result.data;
	// 		localStorage.setItem('user_id', id);
	// 		localStorage.setItem('accessToken', accessToken);
	// 		this.setState({
	// 			isLoggedIn: true,
	// 		});
	// 	} catch (err) {
	// 		console.log(err.response);
	// 		this.setState({
	// 			authStatus: true,
	// 			authError: err.response.data.message,
	// 			buttonStatus: 'login',
	// 		});
	// 		setTimeout(() => {
	// 			this.setState({
	// 				authStatus: false,
	// 				authError: '',
	// 			});
	// 		}, 4000);
	// 	}
	// };

	render() {
		const {
			email,
			password,
			errors,
			validation,
			isValid,
			buttonStatus,
			authError,
			authStatus,
			isLoggedIn,
		} = this.props;

		return (
			<div
				className='modal fade'
				id='loginBackdrop'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
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
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						{isLoggedIn ? (
							<div className='alert alert-success' role='alert'>
								successfully logged in
							</div>
						) : (
							<div className='modal-body'>
								<div
									className='alert alert-danger'
									role='alert'
									style={{ display: `${authStatus ? 'block' : 'none'}` }}>
									{authError}
								</div>
								<form onSubmit={(event) => event.preventDefault()}>
									<div className='mb-3'>
										<label htmlFor='email' className='form-label'>
											Email
										</label>
										<input
											type='email'
											className={`form-control  ${validation.email}`}
											id='email'
											name='email'
											aria-describedby='emailHelp'
											placeholder='Enter your email'
											onChange={(event) => this.props.validateChange(event)}
											autoComplete='off'
										/>
										<div id='emailFeedback' className='invalid-feedback'>
											{errors.email}
										</div>
										<div id='emailHelp' className='form-text'>
											We'll never share your email with anyone else.
										</div>
									</div>
									<div className='mb-3'>
										<label htmlFor='password' className='form-label'>
											Password
										</label>
										<input
											type='password'
											className={`form-control  ${validation.password}`}
											id='password'
											name='password'
											placeholder='Enter your password'
											onChange={(event) => this.props.validateChange(event)}
										/>
										<div id='passwordFeedback' className='invalid-feedback'>
											{errors.password}
										</div>
									</div>
									<button
										onClick={() => this.props.submit(email, password)}
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

const mapStateToProps = (state) => {
	return {
		email: state.login.email,
		password: state.login.email,
		errors: state.login.errors,
		validation: state.login.validation,
		isValid: state.login.isValid,
		buttonStatus: state.login.buttonStatus,
		authError: state.login.authError,
		authStatus: state.login.authStatus,
		isLoggedIn: state.login.isLoggedIn,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		validateChange: (event) => dispatch(validateChange(event)),
		submit: (email, password) => dispatch(onSubmit(email, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
