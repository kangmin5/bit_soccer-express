// import db from '../models/index.js'

// const TeamSchema = db.team

// exports.addteam = (req, res) => {
//     console.log(' 진행4 : 노드서버에 진입함' + JSON.stringify(req.body))
//     new TeamSchema(req.body).save(() => {
//         res.status(200).json({'result': 'ok'})
//     })
// }
// exports.teamlist = (req, res) => {
//     console.log(`### gameController access ###`)
//     TeamSchema.find()
//         .exec((err, teams) => {
//         if(err) return res.status(400).send(err)
//             res.status(200).json({ success: true, teams })
//     })
// }
