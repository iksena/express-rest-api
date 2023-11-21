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
  const payload = req.body;

  try {
    const place = placeService.createPlace(payload);

    res.status(201).send(place);
  } catch (error) {
    next(error);
  }
};

exports.patchPlaces = (req, res, next) => {
  const { placeService } = req.app;
  const { id } = req.params;
  const payload = req.body;

  try {
    const place = placeService.updatePlace(id, payload);

    res.status(200).send(place);
  } catch (error) {
    next(error);
  }
};

exports.deletePlace = (req, res, next) => {
  const { placeService } = req.app;
  const { id } = req.params;

  try {
    placeService.deletePlace(id);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
