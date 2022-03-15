
require('dotenv').config()
const express = require('express')
const path = require('path')
const router = require('./routes/router')

const PORT = 3000;



const server = express()


server
    .use(router)
    .listen(PORT, () => {
        console.log(`Running at: http://localhost:${PORT}`)
    })