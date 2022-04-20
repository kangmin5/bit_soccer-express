// import db from '../models/index.js'
// const GameSchema = db.game

// exports.addgame = (req, res) => {
//     console.log(' 진행4 : 노드서버에 진입함' + JSON.stringify(req.body))
//     new GameSchema(req.body).save(() => {
//         res.status(200).json({'result': 'ok'})
//     })
// }

// exports.gamelist = (req, res) => {
//     console.log(`### gameController access ###`)
//     GameSchema.find()
//         .exec((err, games) => {
//         if(err) return res.status(400).send(err)
//             res.status(200).json({ success: true, games })
//     })
// }