require('dotenv').config();
var cors = require('cors')
const express = require('express');
const { clearCookie } = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();


const { port, MONGO_URI } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require('./app/routes/admin.route')('/api/admin',app)
require('./app/routes/basic.route')('/api/basic', app)
require('./app/routes/board.route')('/api/board', app)
require('./app/routes/game.route')('/api/game', app);
require('./app/routes/todo.route')('/api/todo', todo)
require('./app/routes/user.route')('/api/user', user)


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
app.listen(port, () => {
  console.log({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})






