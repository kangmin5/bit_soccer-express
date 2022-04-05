const express = require('express')
const todoRouter = express.Router()

todoRouter.use((req, res, next)=> {
    console.log('### Schedule SERVER ###')
    next()
})

module.exports = todoRouter