const { getBmi,calc } = require('../controllers/basic.controller');
module.exports = x => x.app.post(`${x.url}/bmi`, getBmi) ;
module.exports = x => x.app.post(`${x.url}/calc`, calc) ;