const { Router } = require('express');

const checkKey = require('../middleware/chechKeyMW');
const { f11_controller, f12_controller, f13_controller } = require('../controllers/');
const decode = require('../middleware/decode');

const router = new Router();

router.post('/f11', checkKey, decode, f11_controller.addData);
router.post('/f12', checkKey, decode, f12_controller.addData);
router.post('/f13', checkKey, decode, f13_controller.addData);

module.exports = router;
