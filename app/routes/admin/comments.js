const express = require('express');
const router = express.Router();
const commentscontrollers = require('../../controllers/admin/comments');

router.get('/',commentscontrollers.index);
router.get('/approve/:commentID',commentscontrollers.approve);
router.get('/reject/:commentID',commentscontrollers.reject);
router.get('/delete/:commentID',commentscontrollers.delete);

module.exports = router;