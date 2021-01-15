import Validator from '../../Validation/Validation';
import apiRequest from '../../apiRequest/apiRequest';

export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const BUTTON_WAIT = 'BUTTON_WAIT';
export const BUTTON_LOGIN = 'BUTTON_LOGIN';
export const LOGGED_IN = 'LOGGED_IN';
export const ERROR_ACTIVE = 'ERROR_ACTIVE';
export const ERROR_INACTIVE = 'ERROR_INACTIVE';

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
export const buttonLogin = () => {
	return {
		type: BUTTON_LOGIN,
	};
};

export const loggedIn = () => {
	return {
		type: LOGGED_IN,
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
