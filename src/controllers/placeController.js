exports.getPlaces = (req, res, next) => {
  const { placeService } = req.app;
  try {
    const places = placeService.getPlaces();

    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
};

exports.postPlaces = (req, res, next) => {
  const { placeService } = req.app;

  try {
    const place = placeService.createPlace(req.body);

    res.status(201).send(place);
  } catch (error) {
    next(error);
  }
};
