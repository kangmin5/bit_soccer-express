const express = require('express')
const gameRouter = express.Router()

gameRouter.use((req, res, next)=> {
    console.log('### Sports Game SERVER ###')
    next()
})

module.exports = gameRouter