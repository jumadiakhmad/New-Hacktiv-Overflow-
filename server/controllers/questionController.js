const Questions = require('../models/questionModel');

const createQuestion = (req,res) => {
  Questions.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    answers: [],
    like: [],
    unlike: []
  }, (err,newQuestion) => {
    if(err) res.send(err)
    res.send(newQuestion)
  })
}

const getAllQuestions = (req,res) => {
  Questions.find()
  .populate('answers')
  .then( (err,answers) => {
    if(err) res.send(err)
    res.send(answers)
  })
}

const getOneQuestion = (req,res) => {
  let id = req.params.id;
  Questions.findById(id)
  .populate('answers')
  .then( (err,answer) =>{
    if(err) res.send(err)
    res.send(answer)
  })
}

const addAnswer = function(req, res){
    let id = req.params.id,
        answers = req.body.answerId;
    Question.findByIdAndUpdate(id, {
        $push: { answers: answers }
    }, {
        safe: true,
        upsert: true,
        new: true
    }, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'Kesalahan, tidak bisa menambah answer',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}

const addLike =  (req, res) => {
    let id = req.params.id,
        like = req.body.like;
    Questions.findByIdAndUpdate(id, {
        $push: { like: like }
    }, {
        safe: true,
        upsert: true,
        new: true
    }, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'Kesalahan, tidak bisa menambah like',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}

const addUnlike =  (req, res) => {
    let id = req.params.id,
        unlike = req.body.unlike;
    Questions.findByIdAndUpdate(id, {
        $push: { unlike : unlike }
    }, {
        safe: true,
        upsert: true,
        new: true
    }, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'Kesalahan, tidak bisa menambah like',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}


const deleteQuestion = (req,res) => {
  Questions.remove({
    _id: req.params.id
  }, (err,deleteQuestion) => {
    if(err) res.send(err)
    console.log('delete question success');
    res.send(deleteQuestion)
  })
}


module.exports = {
  createQuestion,
  getAllQuestions,
  getOneQuestion,
  deleteQuestion,
  addAnswer,
  addLike,
  addUnlike
}
