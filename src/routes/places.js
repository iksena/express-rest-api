const { Router } = require('express');

const { getPlaces, postPlaces, patchPlaces } = require('../controllers/placeController');
const withPlaceService = require('../middlewares/withPlaceService');

const router = Router();

router.get(
  '/places',
  withPlaceService,
  getPlaces,
);

router.post(
  '/places',
  withPlaceService,
  postPlaces,
);

router.patch(
  '/places/:id',
  withPlaceService,
  patchPlaces,
);

module.exports = router;
