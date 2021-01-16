import apiRequest from '../../apiRequest/apiRequest';

export const SEARCH_HANDLE_CHANGE = 'SEARCH_HANDLE_CHANGE';
export const SEARCH_HANDLE_SUBMIT = 'SEARCH_HANDLE_SUBMIT';
export const SET_AIRPORT_DATA = 'SET_AIRPORT_DATA';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';
export const STORE_SEARCH_RESULT = 'STORE_SEARCH_RESULT';
export const LOADING_OFF = 'LOADING_OFF';
export const DISPLAY_ALERT = 'DISPLAY_ALERT';
export const TO_LOCATION = 'TO_LOCATION';
export const FROM_LOCATION = 'FROM_LOCATION';

export const searchHandleChange = (event) => {
	return {
		type: SEARCH_HANDLE_CHANGE,
		event,
	};
};

export const setAirportData = (data) => {
	return {
		type: SET_AIRPORT_DATA,
		data,
	};
};

export const setError = (message) => {
	return {
		type: ERROR_MESSAGE,
		message,
	};
};

export const searchHandleSubmit = (from, to) => {
	console.log(from, to);
	return (dispatch) => {
		if (from == to) {
			dispatch(setError('From and To airport cannot be same'));
		} else {
			dispatch(setError(''));
		}
	};
};

export const airportDataRequest = () => {
	return async (dispatch) => {
		try {
			const result = await apiRequest({
				method: 'get',
				url: '/airport-list',
			});
			dispatch(setAirportData(result.data));
		} catch (err) {
			console.log(err);
		}
	};
};

export const storeSearchResult = (result) => {
	return {
		type: STORE_SEARCH_RESULT,
		result,
	};
};

export const loadingOff = () => {
	return {
		type: LOADING_OFF,
	};
};

export const displayAlert = (message) => {
	return {
		type: DISPLAY_ALERT,
		message,
	};
};

export const searchFlights = (from, to, date) => {
	return async (dispatch) => {
		try {
			const result = await apiRequest({
				method: 'post',
				url: '/search',
				data: {
					from,
					to,
					departureDate: date,
				},
			});
			dispatch(storeSearchResult(result.data));
			dispatch(loadingOff());
		} catch (err) {
			dispatch(displayAlert(err.response.data.message));
			dispatch(loadingOff());
		}
	};
};

export const setToLocation = (city) => {
	return {
		type: TO_LOCATION,
		city,
	};
};

export const toLocation = (id) => {
	return async (dispatch) => {
		try {
			const result = await apiRequest({
				method: 'get',
				url: `/location/${id}`,
			});
			dispatch(result.data.city);
		} catch (err) {
			console.log(err);
		}
	};
};
export const setFromLocation = (city) => {
	return {
		type: TO_LOCATION,
		city,
	};
};

export const fromLocation = (id) => {
	return async (dispatch) => {
		try {
			const result = await apiRequest({
				method: 'get',
				url: `/location/${id}`,
			});
			dispatch(result.data.city);
		} catch (err) {
			console.log(err);
		}
	};
};
