import {
	LOGIN_HANDLE_CHANGE,
	LOGIN_BUTTON_WAIT,
	LOGIN_BUTTON_LOGIN,
	LOGIN_ERROR_ACTIVE,
	LOGIN_ERROR_INACTIVE,
	LOGIN_LOGGED_IN,
	LOGIN_LOGGED_OUT,
} from '../actions/loginAction';

const initialState = {
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

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_HANDLE_CHANGE: {
			const { name, value } = action.event.target;
			let newState = {
				...state,
				[name]: value,
			};
			if (action.validationResult !== 'success') {
				newState.errors = {
					...state.errors,
					[name]: action.validationResult,
				};
				newState.validation = {
					...state.validation,
					[name]: 'is-invalid',
				};
				newState.isValid = false;
			} else {
				newState.errors = {
					...state.errors,
					[name]: '',
				};
				newState.validation = {
					...state.validation,
					[name]: 'is-valid',
				};
				if (state.email.length > 0 && state.password.length > 0) {
					newState.isValid = true;
				}
			}
			return newState;
		}
		case LOGIN_BUTTON_WAIT:
			return {
				...state,
				buttonStatus: 'please wait ...',
			};

		case LOGIN_BUTTON_LOGIN:
			return {
				...state,
				buttonStatus: 'Login',
			};

		case LOGIN_ERROR_ACTIVE:
			return {
				...state,
				authStatus: true,
				authError: action.err,
			};

		case LOGIN_ERROR_INACTIVE:
			return {
				...state,
				authStatus: false,
				authError: '',
			};
		case LOGIN_LOGGED_IN: {
			return {
				...state,
				isLoggedIn: true,
			};
		}
		case LOGIN_LOGGED_OUT: {
			return {
				...state,
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
		}
		default:
			return state;
	}
};

export default loginReducer;
