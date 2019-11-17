import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  
  return axios.create({
    baseURL: 'empty',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;