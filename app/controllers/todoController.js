import express from 'express'
import db from '../models/index.js'

export default function todoController() {
    const router = express.Router();
    const Todo = db.todo
    router.post('addTodo', function(req, res){
      console.log(' ### 진행 4: 노드서버에 진입함 '+ JSON.stringify(req.body))
      new Todo(req.body).save(()=>{
        res.status(200).json({'result':'OK'})
      })
    });
    router.get('getTodo', function(req, res){
      Todo.find()
      .exec((err, todos) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success : true, todos})
        console.log(todos)
      })
    });
    router.get('profile',function(req, res){
      Todo.find({task: req.params.id})
      .exec((err, todo) => {
          if (err) return res.status(400).send(err)
          res.status(200).json({ success: true, todo })
      })
    });
}