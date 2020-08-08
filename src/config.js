const axios = require('axios');

const urlBase = '';

const axiosService = axios.create({
    baseURL: urlBase,
    timeout: 10000,
  });