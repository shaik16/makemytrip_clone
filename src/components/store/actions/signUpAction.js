import Validator from '../../Validation/Validation';
import apiRequest from '../../apiRequest/apiRequest';

export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const BUTTON_WAIT = 'BUTTON_WAIT';
export const BUTTON_SIGNUP = 'BUTTON_SIGNUP';
export const ERROR_ACTIVE = 'ERROR_ACTIVE';
export const ERROR_INACTIVE = 'ERROR_INACTIVE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const handleChange = (event, validationResult) => {
	return {
		type: HANDLE_CHANGE,
		event,
		validationResult,
	};
};

export const buttonWait = () => {
	return {
		type: BUTTON_WAIT,
	};
};
export const buttonSignup = () => {
	return {
		type: BUTTON_SIGNUP,
	};
};

export const errorActive = (err) => {
	return {
		type: ERROR_ACTIVE,
		err,
	};
};
export const errorInActive = () => {
	return {
		type: ERROR_INACTIVE,
	};
};

export const signUpSuccess = (message) => {
	return {
		type: SIGNUP_SUCCESS,
		message,
	};
};

export const validateChange = (event, password) => {
	const { name, value } = event.target;
	return async (dispatch) => {
		let validationResult;
		if (name === 'confirmPassword') {
			validationResult = await Validator({ [name]: value, password: password });
			dispatch(handleChange(event, validationResult));
		} else {
			validationResult = await Validator({ [name]: value });
			dispatch(handleChange(event, validationResult));
		}
	};
};

export const onSubmit = (name, email, password, confirmPassword) => {
	return async (dispatch) => {
		try {
			console.log(name, email, password, confirmPassword);
			dispatch(buttonWait());
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
			dispatch(signUpSuccess(result.data.message));
		} catch (err) {
			dispatch(errorActive(err.response.data.message));
			dispatch(buttonSignup());
			setTimeout(() => {
				dispatch(errorInActive());
			}, 4000);
		}
	};
};
