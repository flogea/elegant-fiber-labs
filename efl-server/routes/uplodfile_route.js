const { Router } = require('express');
const fileMiddleware = require('../middleware/uploadfile');

const router = new Router();

router.post('/uploadfile', fileMiddleware.single('photo'), async (req, res) => {
  try {
  } catch (error) {
    console.log('error upload file router');
  }
});

module.exports = router;
