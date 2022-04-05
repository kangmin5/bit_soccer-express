const express = require('express')
const adminRouter = express.Router()

adminRouter.use((req, res, next)=> {
    console.log('### ADMIN SERVER ###')
    next()
})
module.exports = adminRouter