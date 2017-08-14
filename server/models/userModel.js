const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String
})

var Users = mongoose.model('users', userSchema);
module.exports = Users;
