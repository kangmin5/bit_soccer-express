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



// import { board, boardlist } from '../controllers/board.controller';
// module.exports = x => {
//     console.log(' board.router로 들어옴')
//     x.app.post(`${x.url}/board`, board)
//     x.app.get(`${x.url}/list`, boardlist)
// };
app.post('/board', cors(corsOptions),(req, res) => {
    const service = new BoardService()
    res.status(200).json(service.write(req, res))
})

export default app