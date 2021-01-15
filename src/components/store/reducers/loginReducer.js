import {
	HANDLE_CHANGE,
	BUTTON_WAIT,
	BUTTON_LOGIN,
	ERROR_ACTIVE,
	ERROR_INACTIVE,
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
		case HANDLE_CHANGE: {
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
				newState = {
					...state,
					errors: {
						...state.errors,
						[name]: '',
					},
					validation: {
						...state.validation,
						[name]: 'is-valid',
					},
				};
				if (state.email.length > 0 && state.password.length > 0) {
					newState.isValid = true;
				}
			}
			return newState;
		}
		case BUTTON_WAIT:
			return {
				...state,
				buttonStatus: 'please wait ...',
			};

		case BUTTON_LOGIN:
			return {
				...state,
				buttonStatus: 'Login',
			};

		case ERROR_ACTIVE:
			return {
				...state,
				authStatus: true,
				authError: action.err,
			};

		case ERROR_INACTIVE:
			return {
				...state,
				authStatus: false,
				authError: '',
			};
		default:
			return state;
	}
};

export default loginReducer;
