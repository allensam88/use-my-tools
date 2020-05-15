import axios from 'axios';

const AxiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: (function () {
			switch (process.env.REACT_APP_ENV) {
				case "development":
					return process.env.REACT_APP_LOCAL_HOST;
				case "production":
					return process.env.REACT_APP_PRODUCTION_URL;
				default:
					return process.env.REACT_APP_LOCAL_HOST;
			}
		})(),
		headers: {
			// "Authorization": token,
			"Authorization": token,
			"Content-Type": "application/json",
		},
	});
};

export default AxiosWithAuth;