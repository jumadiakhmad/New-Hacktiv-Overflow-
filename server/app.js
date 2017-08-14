const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const logger = require('morgan');
const mongoose = require('mongoose');
const users = require('./routes/users');
const questions = require('./routes/questions');
const answers = require('./routes/answers');
const app = express();

mongoose.connect('mongodb://localhost/hacktiv-overflow-jumadi');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use('/users', users);
app.use('/questions', questions);
app.use('/answers', answers);

app.listen(3000, () => console.log("Listening on port 3000"));
