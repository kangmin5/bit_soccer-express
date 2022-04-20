import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());




// import { todo, todolist } from '../controllers/todoController'
// module.exports = x => {
//     console.log(' todo.route로 들어옴 ')
//     x.app.post(`${x.url}/addtodo`, todo)
//     x.app.get(`${x.url}/list`, todolist)
// }