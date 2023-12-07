const { Router } = require('express');

const {
  getPlaces, postPlaces, patchPlaces, deletePlace, getPlacesById,
} = require('../controllers/placeController');
const { postPlacesSchema } = require('./schemas/places');
const withPlaceService = require('../middlewares/withPlaceService');
const withGeocodingService = require('../middlewares/withGeocodingService');
const withValidateSchema = require('../middlewares/withValidateSchema');

const router = Router();

router.get(
  '/places/:id',
  withGeocodingService,
  withPlaceService,
  getPlacesById,
);

router.get(
  '/places',
  withGeocodingService,
  withPlaceService,
  getPlaces,
);

router.post(
  '/places',
  withValidateSchema(postPlacesSchema),
  withPlaceService,
  postPlaces,
);

router.patch(
  '/places/:id',
  withValidateSchema(patchPlaces),
  withPlaceService,
  patchPlaces,
);

router.delete(
  '/places/:id',
  withPlaceService,
  deletePlace,
);

module.exports = router;
