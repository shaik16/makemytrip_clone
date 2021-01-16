export const SELECT_BOOKING = 'SELECT_BOOKING';

export const selectBooking = (obj, price, flightClass) => {
	console.log(obj, price, flightClass);
	return {
		type: SELECT_BOOKING,
		obj,
		price,
		flightClass,
	};
};
