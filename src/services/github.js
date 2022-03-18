
const axios = require('axios');

const url = process.env.GITHUB_MY_ENDPOINT;


axios(url)
    .then(res => {
        exports.result = res.data;
    })
    .catch(e => {
        new Error('ERRO AQUI!!!')
        console.log(e)
    })

