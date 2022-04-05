const express = require('express')
const basicRouter = express.Router()


basicRouter.post("/calc", (req, res) => {
  const { num1, num2, opcode } = req.body
  
    res.json(computeCalc(req.body))
})

function computeCalc(payload) {
  const { num1, num2, opcode }= payload
  let _num1 = Number(num1)
  let _num2 = Number(num2)
  const result = {num1, num2,opcode}
  switch(opcode) {
    case '+' : result.res = _num1 + _num2; break;
    case '-' : result.res = _num1 - _num2; break;
    case '*' : result.res = _num1 * _num2; break;
    case '/' : result.res = _num1 / _num2; break;
    case '%' : result.res = _num1 % _num2; break;
  }
  return result
}

function computeBMI(payload) {
  const {name, height, weight} = payload
  console.log(' #### 진입  ### ')
      //Obtain user inputs
      let _height=Number(height);
      let _weight=Number(weight);

      //Perform calculation
      let bmi = _weight/Math.pow(_height,2);

      let output = Math.round(bmi*100)/100;
      var result = {name, height, weight}
      console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
      if (output<18.5)
        result.bmi = "저체중";
      if (output>=18.5 && output<=25)
        result.bmi = "정상";
      if (output>=25 && output<=30)
        result.bmi = "과체중";
      if (output>30)
        result.bmi = "경도비만";
        console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
      return result
}
basicRouter.post("/bmi", (req, res)=>{
  const {name, height, weight} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`이름 : ${name}`)
  console.log(`키 : ${height}`)
  console.log(`몸무게 : ${weight}`)
  // const json = computeBMI(name, height, weight)
  // console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  // res.json(json)
  res.json(computeBMI(req.body))
})



module.exports = basicRouter
