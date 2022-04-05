var express = require('express');
var userRouter = express.Router();

userRouter.post('/signup', (req, res)=> {
  const { username, password, name, telephone } = req.body
  

res.json(req.body)
});

module.exports = userRouter
