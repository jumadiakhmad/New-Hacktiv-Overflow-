const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var answerSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'users'},
  content: {
    type: String,
    required: true
  },
  like: [{type: Schema.Types.ObjectId, ref: 'users'}],
  unlike: [{type: Schema.Types.ObjectId, ref: 'users'}]
})

var Answers = mongoose.model('answers', answerSchema)

module.exports = Answers;
