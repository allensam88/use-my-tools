import axios from 'axios';

const AxiosWithAuth = () => {
  const token = localStorage.getItem('token');
  
  return axios.create({
    baseURL: 'https://use-my-tool.herokuapp.com',
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;