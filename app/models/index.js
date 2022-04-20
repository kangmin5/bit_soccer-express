import dotenv from 'dotenv';
import mongoose from 'mongoose'
// import BoardModel from './boardModel.js';
// import GameModel from './gameModel.js';
// import TeamModel from './teamModel.js';
import TodoModel from './todoModel.js';
import UserModel from './userModel.js';
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
// db.board = BoardModel(mongoose)
// db.game = GameModel(mongoose)
// db.team = TeamModel(mongoose)
db.todo = TodoModel(mongoose)
db.user = UserModel(mongoose)

export default db