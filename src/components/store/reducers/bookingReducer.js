import { SELECT_BOOKING } from '../actions/bookingAction';

const initialState = {
	flightObj: {},
	flightPrice: 0,
	flightClass: '',
};

const bookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_BOOKING:
			return {
				...state,
				flightObj: action.obj,
				flightPrice: action.price,
				flightClass: action.flightClass,
			};
		default:
			return state;
	}
};

export default bookingReducer;
