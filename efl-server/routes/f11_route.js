const { Router } = require('express');
const F11model = require('../models/F11model');
const router = new Router();
const fs = require('fs');
const speakeasy = require('speakeasy');
const SecretKey = require('../models/SecretKey');

router.post('/f11', async (req, res) => {
  try {
    const data = req.body;
    const { token, email } = req.body;
    try {
      const secretKey = await SecretKey.findOne({ secret });
      console.log(secretKey);
      const verified = speakeasy.totp.verify({ secret: secretKey, encoding: 'base32', token });

      if (verified) {
        const secretkey = new SecretKey({
          id: email,
          secret: secretKey,
        });
        await secretkey.save();
        res.json({ verified: true });
      } else {
        res.json({ verified: false });
      }
    } catch (error) {
      res.status(500).json({ message: 'error verified' });
    }
    const f11 = new F11model({
      data,
    });
    await f11.save();
    res.status(201).json({ message: 'success f11' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'error f11' });
  }
});

module.exports = router;
