import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import verifyToken from './verifyToken.js';

// JWT 보안 

export default function TokenRoute(){
  const router = express.Router();
  router.post('/', async (req, res) => {
    try {
      const id = 'test'
      const nick = 'test'
      // jwt.sign() 메소드: 토큰 발급 
      const token = jwt.sign({id, nick,}, process.env.JWT_SECRET, {
        expiresIn: '1m', //1분
        issuer: '토큰 발급자'
      });
      
      return res.json({
        code: 200,
        message: '토큰이 발급되었습니다.',
        token,
      });
    }catch (error) {
        console.error(error);
        return res.status(500).json({
          code: 500,
          message: '서버 에러',
        });
      }
    });
    
    router.get('/', verifyToken, (req, res) => {
      res.json(req.decoded);
    });

}