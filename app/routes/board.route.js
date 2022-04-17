const { board,boardlist } = require('../controllers/board.controller');
module.exports = x => {
    console.log(' board.router로 들어옴')
    x.app.post(`${x.url}/board`, board)
    x.app.get(`${x.url}/list`, boardlist)
};