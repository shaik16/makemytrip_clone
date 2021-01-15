import React, { Component } from 'react';
import './Signup.css';
import { connect } from 'react-redux';
import { validateChange } from '../store/actions/signUpAction';
import { onSubmit } from '../store/actions/signUpAction';

export class Signup extends Component {
	render() {
		const {
			name,
			email,
			password,
			confirmPassword,
			errors,
			validation,
			isValid,
			buttonStatus,
			authError,
			authStatus,
			successMessage,
			successStatus,
		} = this.props;

		return (
			<div
				className='modal fade'
				id='signUpBackdrop'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
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
						{successStatus ? (
							<div className='alert alert-success' role='alert'>
								{successMessage}
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
										<label htmlFor='name' className='form-label'>
											Name
										</label>
										<input
											type='text'
											className={`form-control  ${validation.name}`}
											id='name'
											aria-describedby='nameHelp'
											name='name'
											placeholder='Enter your name'
											onChange={(event) => this.props.validateChange(event, password)}
										/>
										<div id='nameFeedback' className='invalid-feedback'>
											{errors.name}
										</div>
									</div>
									<div className='mb-3'>
										<label htmlFor='email' className='form-label'>
											Email
										</label>
										<input
											type='email'
											className={`form-control  ${validation.email}`}
											id='email'
											aria-describedby='emailHelp'
											name='email'
											placeholder='Enter your email'
											onChange={(event) => this.props.validateChange(event, password)}
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
											onChange={(event) => this.props.validateChange(event, password)}
										/>
										<div id='passFeedback' className='invalid-feedback'>
											{errors.password}
										</div>
									</div>
									<div className='mb-3'>
										<label htmlFor='confirmPassword' className='form-label'>
											Confirm Password
										</label>
										<input
											type='password'
											className={`form-control  ${validation.confirmPassword}`}
											id='confirmPassword'
											name='confirmPassword'
											placeholder='Re-enter your password'
											onChange={(event) => this.props.validateChange(event, password)}
										/>
										<div id='passFeedback' className='invalid-feedback'>
											{errors.confirmPassword}
										</div>
									</div>
									<button
										onClick={() => this.props.submit(name, email, password, confirmPassword)}
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

const mapStateToProps = (state) => {
	return {
		name: state.signup.name,
		email: state.signup.email,
		password: state.signup.password,
		confirmPassword: state.signup.confirmPassword,
		errors: state.signup.errors,
		validation: state.signup.validation,
		isValid: state.signup.isValid,
		buttonStatus: state.signup.buttonStatus,
		authError: state.signup.authError,
		authStatus: state.signup.authStatus,
		isLoggedIn: state.signup.isLoggedIn,
		successStatus: state.signup.successStatus,
		successMessage: state.signup.successMessage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		validateChange: (event, password) => dispatch(validateChange(event, password)),
		submit: (name, email, password, confirmPassword) =>
			dispatch(onSubmit(name, email, password, confirmPassword)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
