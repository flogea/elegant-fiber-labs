require('dotenv').config();
const speakeasy = require('speakeasy');
const SecretKey = require('../models/SecretKey');

module.exports = async (req, res, next) => {
  const EMAIL = process.env.EMAIL;
  const { token } = req.body;

  try {
    const secretKey = await SecretKey.findOne({ id: EMAIL }, { secret: 1, _id: 0 });
    const secret = secretKey.secret;
    const verified = speakeasy.totp.verify({ secret, encoding: 'base32', token });

    if (verified) {
      await SecretKey.updateOne({ id: EMAIL }, { secret });
      console.log(true);
      next();
    } else {
      console.log('verified false');
      return res.status(401).json({ message: 'error code' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'error verified' });
  }
};
