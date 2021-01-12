import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://makemytrip-backend.herokuapp.com/api',
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
	},
});

export default axiosInstance;
