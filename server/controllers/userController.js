require('dotenv').config();
const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = process.env.SECRET_KEY;

const register = (req,res) => {
  let hash = bcrypt.hashSync(req.body.password, 8);
  Users.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: hash
  }, (err,result) => {
    if(err) res.status(500).send(err)
    console.log(result);
    res.send(result)
  })
}
function login(req, res){
  console.log(req.body.username);
  console.log(req.body.password);
  Users.findOne({username : req.body.username}, function(err, user){
    if(err){
      res.json({err})
    } else {
      if(!user){
        console.log('failed');
        res.send('user not found');
      }
      else if(bcrypt.compareSync(req.body.password, user.password)){
        let token = jwt.sign({username: user.username}, secret, {expiresIn:'1h'})
        console.log('success');
        res.send({token: token});
      } else {
        console.log('failed');
        res.send('wrong password');
      }
    }
  })
}
const getAllUsers = (req,res) => {
  Users.find((err,users) => {
    if(err) res.status(500).send(err)
    res.send(users)
  })
}

module.exports = {
  register, login, getAllUsers
}
