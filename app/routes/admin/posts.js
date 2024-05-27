const express = require('express');
const router = express.Router();
const postsControllers = require('../../controllers/admin/posts');

router.get('/',postsControllers.index);
router.get('/create',postsControllers.create);
router.post('/store',postsControllers.store);
router.get('/delete/:postID',postsControllers.remove);
router.get('/edit/:postID', postsControllers.edit);
router.post('/update/:postID', postsControllers.update);

module.exports = router;