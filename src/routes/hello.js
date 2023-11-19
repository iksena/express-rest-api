const { Router } = require('express');

const { getHello } = require('../controllers/helloController');

const router = Router();

router.get('/', getHello);

module.exports = router;
