const { Router } = require('express');
const F11model = require('../models/F11model');
const router = new Router();
const fs = require('fs');
const speakeasy = require('speakeasy');
const SecretKey = require('../models/SecretKey');
const checkKey = require('../middleware/chechKeyMW');

router.post('/f11', checkKey, async (req, res) => {
  try {
    if (checkKey) {
      const data = req.body;

      const f11 = new F11model({
        data,
      });
      await f11.save();
      res.status(201).json({ message: 'success f11' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'error f11' });
  }
});

module.exports = router;
