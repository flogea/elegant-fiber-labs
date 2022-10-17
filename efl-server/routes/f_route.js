const { Router } = require('express');

const checkKey = require('../middleware/chechKeyMW');
const f11_controller = require('../controllers/f11_controller');
const f13_controller = require('../controllers/f13_controller');
const decode = require('../middleware/decode');

const router = new Router();

router.post('/f11', checkKey, decode, f11_controller.addData);
router.post('/f13', checkKey, decode, f13_controller.addData);

module.exports = router;
