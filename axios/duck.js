const axios = require('axios');
const duckApi = axios.create({
    baseURL: 'https://random-d.uk/api/v2'
})
module.exports = duckApi