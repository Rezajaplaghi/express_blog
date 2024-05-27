const express = require('express');
const router = express.Router();
const dashbordControllers = require('../../controllers/admin/dashbord');

router.get('/',dashbordControllers.index);

module.exports = router;