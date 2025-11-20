const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const reportsCtrl = require('../controllers/reports.controller');

router.post('/', auth, reportsCtrl.create);
router.get('/nearby', reportsCtrl.listNearby);

module.exports = router;
