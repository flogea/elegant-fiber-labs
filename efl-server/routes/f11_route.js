const { Router } = require('express');

const checkKey = require('../middleware/chechKeyMW');
const f11_controller = require('../controllers/f11_controller');
const uploadFileMW = require('../middleware/uploadfileMW');
const middleware = require('../middleware/middleware');

const router = new Router();

router.post('/f11', checkKey, middleware.single('photo'), f11_controller.addData);

module.exports = router;
