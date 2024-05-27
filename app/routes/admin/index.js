const express = require('express');
const router = express.Router();

const dashbord = require('./dashbord');
const postsRouter = require('./posts');
const usersRouter = require('./users');
const stingsRouter = require('./stings');
const commentsRouter = require('./comments');

router.use('/dashbord',dashbord);
router.use('/posts',postsRouter);
router.use('/users',usersRouter);
router.use('/comments',commentsRouter);
router.use('/stings',stingsRouter);


module.exports = router;