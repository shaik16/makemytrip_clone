import {
	ERROR_MESSAGE,
	LOADING_OFF,
	SEARCH_HANDLE_CHANGE,
	SET_AIRPORT_DATA,
	STORE_SEARCH_RESULT,
} from '../actions/searchAction';

const initialState = {
	airportList: [],
	from: 1,
	to: 2,
	date: '2020-01-14',
	travellers: 1,
	error: '',
	searchResult: [],
	loading: true,
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_HANDLE_CHANGE: {
			const { name, value } = action.event.target;
			return {
				...state,
				[name]: value,
			};
		}
		case SET_AIRPORT_DATA:
			return {
				...state,
				airportList: action.data,
			};

		case ERROR_MESSAGE:
			return {
				...state,
				error: action.message,
			};

		case STORE_SEARCH_RESULT:
			return {
				...state,
				searchResult: action.result,
			};

		case LOADING_OFF:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};

export default searchReducer;
