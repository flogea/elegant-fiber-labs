const { Router } = require('express');

const uploadFileMW = require('../middleware/uploadfileMW');

const router = new Router();

router.post('/testrouter', uploadFileMW.single('photo'), async (req, res) => {
  try {
    res.json(req.file);
    console.log(req.file);
    console.log(req.body.file);
    console.log(req.body.photo);
  } catch {
    console.log(error);
  }
});

module.exports = router;
