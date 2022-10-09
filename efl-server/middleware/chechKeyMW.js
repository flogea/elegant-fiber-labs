require('dotenv').config();
const speakeasy = require('speakeasy');
const SecretKey = require('../models/SecretKey');

module.exports = async (req, res, next) => {
  const EMAIL = process.env.EMAIL;
  const { token } = req.body;
  console.log(req.body);

  try {
    const secretKey = await SecretKey.findOne({ id: EMAIL }, { secret: 1, _id: 0 });
    const secret = secretKey.secret;
    const verified = speakeasy.totp.verify({ secret, encoding: 'base32', token });

    if (verified) {
      await SecretKey.updateOne({ id: EMAIL }, { secret });
      next();
    } else {
      res.json({ verified: false });
      console.log('verified false');
    }
  } catch (error) {
    res.status(500).json({ message: 'error verified' });
  }
};
