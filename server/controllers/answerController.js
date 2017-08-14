const Answers = require('../models/answerModel');

const createAnswer = (req,res) => {
  Answers.create({
      author: req.body.author,
      content: req.body.content,
      like: [],
      unlike : []
  }, (err,createAnswer) => {
    if(err) res.send(err)
    res.send(createAnswer)
  })
}

const getAllAnswers = (req,res) => {
    Answers.find()
    .populate('author')
    .then( (err,answers) => {
      if(err) res.send(err)
      res.send(answers)
    })

}

const getOneAnswer = (req,res) => {
  let id = req.params.id
  Answers.findById(id)
  .populate('author')
  .then( (err,answer) => {
    if(err) res.send(err)
    res.send(answer)
  })
}

const deleteAnswer = (req,res) => {
  let id = req.params.id;
  Answers.remove(id, (err,removeAnswer) => {
    if(err) res.send(err)
    res.send(removeAnswer)
  })
}

const addLike = (req,res) => {
  let id = req.params.id;
  Answers.findByIdAndUpdate(id, {
    $push: { like : req.body.like }
  }, (err,like) => {
    if(err) res.send({message: 'kesalahan tidak bisa menambah liki', error: err})
    res.send(like)
  } )
}

const addUnlike = (req,res) => {
  let id = req.params.id
  Answers.findByIdAndUpdate(id, {
    $push: { unlike: req.body.unlike }
  }, (err,unlike) => {
    if(err) res.send(err)
    res.send(unlike)
  })
}

module.exports = {
  createAnswer, getAllAnswers, createAnswer, deleteAnswer,
  addLike, addUnlike
}
