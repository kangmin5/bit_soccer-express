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


import { addteam, teamlist } from '../controllers/teamController';
module.exports = x => {
    console.log('team.route로 들어옴')
    x.app.post(`${x.url}/addteam`, addteam);
    x.app.get(`${x.url}/teamlist`, teamlist);
}