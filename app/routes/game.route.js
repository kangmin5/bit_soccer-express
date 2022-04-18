const { addgame,gamelist } = require('../controllers/game.controller');
module.exports = x => {
    console.log('game.route로 들어옴')
    x.app.post(`${x.url}/addgame`, addgame);
    x.app.get(`${x.url}/gamelist`, gamelist);
}