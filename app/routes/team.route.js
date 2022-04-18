const { addteam,teamlist} = require('../controllers/team.controller');
module.exports = x => {
    console.log('team.route로 들어옴')
    x.app.post(`${x.url}/addteam`, addteam);
    x.app.get(`${x.url}/teamlist`, teamlist);
}