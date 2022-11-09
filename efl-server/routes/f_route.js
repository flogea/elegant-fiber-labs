const { Router } = require('express');

const checkKey = require('../middleware/chechKeyMW');
const f11_controller = require('../controllers/f11_controller');
const f12_controller = require('../controllers/f12_controller');
const f13_controller = require('../controllers/f13_controller');
const decode = require('../middleware/decode');
const Labs = require('../models/Labs');

const router = new Router();

router.post('/f11', checkKey, decode, f11_controller.addData);
router.post('/f12', checkKey, decode, f12_controller.addData);
router.post('/f13', checkKey, decode, f13_controller.addData);
router.get('/labsInfo', (req, res) => {
  Labs.find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
