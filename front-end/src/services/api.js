import axios from 'axios';

const api = axios.create({
    baseURL: 'https://control-expenses-heroku.herokuapp.com/'
});

export default api;