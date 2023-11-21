const { Router } = require('express');

const { getPlacesByUserId } = require('../controllers/userController');
const withPlaceService = require('../middlewares/withPlaceService');
const withUserService = require('../middlewares/withUserService');

const router = Router();

router.get(
  '/users/:id/places',
  withPlaceService,
  withUserService,
  getPlacesByUserId,
);

module.exports = router;
