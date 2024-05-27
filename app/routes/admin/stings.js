const express = require('express');
const router = express.Router();
const stingsControllers = require('../../controllers/admin/stings');

router.get('/',stingsControllers.index);
router.post('/',stingsControllers.store);


module.exports = router;