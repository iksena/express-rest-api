const PlaceService = require('../services/placeService');
const Place = require('../models/place');

module.exports = (req, res, next) => {
  const placeModel = new Place();
  const placeService = new PlaceService(placeModel);

  req.app.placeService = placeService;

  next();
};
