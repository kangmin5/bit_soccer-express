const {todo, todolist} = require('../controllers/todo.controller')
module.exports = x => {
    console.log(' todo.route로 들어옴 ')
    x.app.get(`${x.url}/todo`, todo)
    x.app.get(`${x.url}/list`, todolist)
}