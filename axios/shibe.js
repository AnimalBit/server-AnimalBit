const axios = require('axios')
const shibeApi = axios.create({
    baseURL: 'http://shibe.online/api'
})

module.exports = shibeApi