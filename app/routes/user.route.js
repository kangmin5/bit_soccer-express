const { signup, userlist, login } = require('../controllers/user.controller');

module.exports = x => {
    console.log(' user.route로 들어옴 ')
    x.app.post(`${x.url}/signup`, signup)
    x.app.post(`${x.url}/login`, login)
    x.app.get(`${x.url}/list`, userlist)
};
