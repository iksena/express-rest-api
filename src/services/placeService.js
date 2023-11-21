const NotFoundError = require('../errors/notFoundError');

class PlaceService {
  placeModel;

  constructor(placeModel) {
    this.placeModel = placeModel;
  }

  getPlace(placeId) {
    const place = this.placeModel.getPlaceById(placeId);

    return place;
  }

  getPlaces() {
    const places = this.placeModel.getAllPlaces();

    return places;
  }

  updatePlace(placeId, payload) {
    const place = this.placeModel.updatePlaceById(placeId, payload);

    return place;
  }

  createPlace(payload) {
    const {
      name,
      address,
      city,
    } = payload;

    return this.placeModel.createPlace({
      name,
      address,
      city,
    });
  }

  deletePlace(placeId) {
    const place = this.getPlace(placeId);
    if (!place) {
      throw new NotFoundError('Place is not found!');
    }

    this.placeModel.deletePlace(placeId);
  }
}

module.exports = PlaceService;
