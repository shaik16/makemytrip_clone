import Validator from '../../Validation/Validation';
import apiRequest from '../../apiRequest/apiRequest';

export const LOGIN_HANDLE_CHANGE = 'LOGIN_HANDLE_CHANGE';
export const LOGIN_BUTTON_WAIT = 'LOGIN_BUTTON_WAIT';
export const LOGIN_BUTTON_LOGIN = 'LOGIN_BUTTON_LOGIN';
export const LOGIN_LOGGED_IN = 'LOGIN_LOGGED_IN';
export const LOGIN_LOGGED_OUT = 'LOGIN_LOGGED_OUT';
export const LOGIN_ERROR_ACTIVE = 'LOGIN_ERROR_ACTIVE';
export const LOGIN_ERROR_INACTIVE = 'LOGIN_ERROR_INACTIVE';

export const handleChange = (event, validationResult) => {
	return {
		type: LOGIN_HANDLE_CHANGE,
		event,
		validationResult,
	};
};

export const buttonWait = () => {
	return {
		type: LOGIN_BUTTON_WAIT,
	};
};
export const buttonLogin = () => {
	return {
		type: LOGIN_BUTTON_LOGIN,
	};
};

export const loggedIn = () => {
	return {
		type: LOGIN_LOGGED_IN,
	};
};
export const loggedOut = () => {
	return {
		type: LOGIN_LOGGED_OUT,
	};
};

export const errorActive = (err) => {
	return {
		type: LOGIN_ERROR_ACTIVE,
		err,
	};
};
export const errorInActive = () => {
	return {
		type: LOGIN_ERROR_INACTIVE,
	};
};

export const validateChange = (event) => {
	const { name, value } = event.target;
	return async (dispatch) => {
		const validationResult = await Validator({ [name]: value });
		dispatch(handleChange(event, validationResult));
	};
};

export const onSubmit = (email, password) => {
	return async (dispatch) => {
		try {
			dispatch(buttonWait());
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
			dispatch(loggedIn());
		} catch (err) {
			dispatch(errorActive(err.response.data.message));
			dispatch(buttonLogin());
			setTimeout(() => {
				dispatch(errorInActive());
			}, 4000);
		}
	};
};
