const { Router } = require('express');

const checkKey = require('../middleware/chechKeyMW');
const runScriptMW = require('../middleware/runScriptMW');
const f11_controller = require('../controllers/f11_controller');
const f12_controller = require('../controllers/f12_controller');
const f13_controller = require('../controllers/f13_controller');
const m11_controller = require('../controllers/m11_controller');
const n21_controller = require('../controllers/n21_controller');
const decode = require('../middleware/decode');
const Labs = require('../models/Labs');

const router = new Router();

router.post('/f11', checkKey, decode, f11_controller.addData, runScriptMW);
router.post('/f12', checkKey, decode, f12_controller.addData, runScriptMW);
router.post('/f13', checkKey, decode, f13_controller.addData, runScriptMW);

router.post('/m11save', m11_controller.saveData, (req, res) => {
  const id_lab = res.locals.id_lab;
  res.status(201).json({ message: 'success save m11', id_lab });
});
router.post('/m11', checkKey, m11_controller.saveData, m11_controller.addData, runScriptMW);
router.get('/m11save/:id', m11_controller.getData);

router.post('/n21', checkKey, decode, n21_controller.addData, runScriptMW);

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
