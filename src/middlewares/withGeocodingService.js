const GeocodingService = require('../services/geocodingService');
const GeocodingAPI = require('../models/geocoding');

module.exports = (req, res, next) => {
  const geocodingAPIModel = new GeocodingAPI('AIzaSyDILnplVm17RXSmsM5XdG7OUy7r7SLEpWw');
  const geocodingService = new GeocodingService(geocodingAPIModel);

  req.app.geocodingService = geocodingService;

  next();
};
