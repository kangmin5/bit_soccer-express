
// import { bmi,calc } from '../services/basic.service.js'
// exports.getBmi = (req, res) =>{
//     const {name, height, weight} = req.body
//     console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
//     console.log(`이름 : ${name}`)
//     console.log(`키 : ${height}`)
//     console.log(`몸무게 : ${weight}`)
//     const json = bmi({name, height, weight})
//     console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
//     res.status(200).json(json)
// }
  
// exports.calc = (req, res) => {
//   const { num1, num2, opcode } = req.body
//   console.log(`Return Values ${JSON.stringify(req.body)}`)
//   const json = calc({ num1, num2, opcode })
//   res.status(200).json(json)
// }