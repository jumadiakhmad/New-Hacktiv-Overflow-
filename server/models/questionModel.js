const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var questionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    ref: 'users',
    required: true
  },
  answers: [{ type: Schema.Types.ObjectId, ref: 'answers'}],
  like: [{ type: Schema.Types.ObjectId, ref: 'users'}],
  unlike: [{type: Schema.Types.ObjectId, ref: 'users'}],
})

var Question = mongoose.model('questions', questionSchema);

module.exports = Question;
