const { Router } = require('express');
const User = require('../models/User');
const router = new Router();
const fs = require('fs');
const speakeasy = require('speakeasy');
const SecretKey = require('../models/SecretKey');

router.post('/reg', async (req, res) => {
  try {
    const id = req.body.email;
    const temp_secret = speakeasy.generateSecret().base32;
    const secretkey = new SecretKey({
      id,
      secret: temp_secret,
    });
    await secretkey.save();
    res.status(201).json({ id, temp_secret });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error generating the secret code' });
  }

  // try {
  //     const {email, password} = req.body

  //     const isUsed = await User.findOne({email})
  //     if (isUsed) {
  //         return res.status(300).json({message: "email is unavailable, try another one"})
  //     }

  //     const user = new User({
  //         email, password
  //     })

  //     await user.save()

  //     res.status(201).json({message: "success"})

  // } catch (error) {
  //     console.log(error)
  // }
});

router.post('/login', async (req, res) => {
  const { token, email } = req.body;
  try {
    const secretKey = await SecretKey.findOne({ id: email }, { secret: 1, _id: 0 });
    const secret = secretKey.secret;
    const verified = speakeasy.totp.verify({ secret, encoding: 'base32', token });

    if (verified) {
      await SecretKey.updateOne({ id: email }, { secret });
      res.json({ verified: true });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    res.status(500).json({ message: 'error verified' });
  }
});

module.exports = router;
