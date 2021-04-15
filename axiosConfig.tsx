import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://crehana-backend-clone.herokuapp.com/api/v1',
});

export default Axios;
