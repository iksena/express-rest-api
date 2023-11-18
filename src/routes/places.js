const { Router } = require('express');

const { getPlaces } = require('../controllers/placeController');
const withPlaceService = require('../middlewares/withPlaceService');

const router = Router();

router.get(
  '/places',
  withPlaceService,
  getPlaces,
);

module.exports = router;
