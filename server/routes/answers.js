const veryfication = require('../helpers/jwtVerify')
const router = require('express').Router();
const Answer = require('../controllers/answerController');

router.get('/', Answer.getAllAnswers);
// router.get('/:id', Answer.getOneAnswer);
router.post('/', veryfication.verifyUserQuestion, Answer.createAnswer);
router.delete('/:id', veryfication.verifyUserQuestion, Answer.deleteAnswer);
router.put('/like/:id', veryfication.verifyUserQuestion, Answer.addLike);
router.put('/unlike/:id', veryfication.verifyUserQuestion, Answer.addUnlike);

module.exports = router
