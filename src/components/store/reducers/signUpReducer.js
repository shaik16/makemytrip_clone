import {
	BUTTON_SIGNUP,
	BUTTON_WAIT,
	ERROR_ACTIVE,
	ERROR_INACTIVE,
	HANDLE_CHANGE,
	SIGNUP_SUCCESS,
} from '../actions/signUpAction';

const initialState = {
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

const signUpReducer = (state = initialState, action) => {
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
				newState.errors = {
					...state.errors,
					[name]: '',
				};
				newState.validation = {
					...state.validation,
					[name]: 'is-valid',
				};
				if (
					state.name.length > 0 &&
					state.email.length > 0 &&
					state.password.length > 0 &&
					state.confirmPassword.length > 0
				) {
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

		case BUTTON_SIGNUP:
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

		case SIGNUP_SUCCESS:
			return {
				...state,
				successStatus: true,
				successMessage: action.message,
			};
		default:
			return state;
	}
};

export default signUpReducer;
