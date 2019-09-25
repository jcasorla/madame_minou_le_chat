const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
router.use(catchallRoute);
module.exports = router;
