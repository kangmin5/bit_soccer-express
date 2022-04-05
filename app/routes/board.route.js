const express = require('express');
const {write} = require("../controllers/board.controller")
const boardRouter = express.Router()

boardRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

boardRouter.post("/write",write)

module.exports = boardRouter;