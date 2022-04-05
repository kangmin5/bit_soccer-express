const { signup } = require('../services/user.service');

exports.signup = (req, res) => {
    const { username, password, name, telephone } = req.body
    console.log(` 넘어온 값: ${JSON.stringify(req.body)}`)
    
    res.status(200).json(req.body)

}