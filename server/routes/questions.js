const express = require('express');
const router = express.Router();
const verifycation = require('../helpers/jwtVerify')
const questions = require('../controllers/questionController')



/* API questions */
router.post('/', verifycation.verifyUserQuestion, questions.createQuestion);
router.get('/', questions.getAllQuestions);
router.get('/:id', questions.getOneQuestion);
// router.put('/:id',verifycation.verifyUserQuestion, questions.updateQuestion);
router.delete('/:id',verifycation.verifyUserQuestion, questions.deleteQuestion);
router.put('/answers/:id', questions.addAnswer);
router.put('/like/:id', verifycation.verifyUserQuestion, questions.addLike );
router.put('/unlike/:id', verifycation.verifyUserQuestion, questions.addUnlike);

module.exports = router;
