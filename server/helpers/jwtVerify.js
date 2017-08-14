const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY
require('dotenv').config();

const verifyUserQuestion = (req,res,next) => {
  let token = req.headers.token;
  let id = req.params.id;
  if(token) {
    let decoded = jwt.verify(token, secret)
    if(decoded) {
      next()
    } else {
      res.send({message: 'tidak bisa post'})
    }
  } else {
    res.send({message: 'Harus login atau register terlebih dahulu'})
  }
}

const verifyUser = (req,res,next) => {
  let token = req.headers.token;
  let id = req.params.id;
    if(token) {
      let decoded = jwt.verify(token,secret)
      if(decoded._id === id) {
        next()
      } else {
        res.send({message: 'tidak bisa melakukan hal ini'})
      }
    } else {
      res.send({message: 'anda harus loginregister terlebih dahulu'})
    }
}

const verifyUserAnswer = (req,res,next) => {
  let token = req.headers.token;
  let id = req.params.id;
    if(token) {
      let decoded = jwt.verify(token,secret)
      if(decoded) {
        next()
      } else {
        res.send({message: 'tidak bisa melakukan hal ini'})
      }
    } else {
      res.send({message: 'anda harus loginregister terlebih dahulu'})
    }
}

module.exports = {
  verifyUserQuestion, verifyUserAnswer, verifyUser
}
