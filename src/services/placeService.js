const NotFoundError = require('../errors/notFoundError');

class PlaceService {
  placeModel;
  geocodingService;

  constructor(placeModel, geocodingService) {
    this.placeModel = placeModel;
    this.geocodingService = geocodingService;
  }

  async getPlace(placeId) {
    const place = this.placeModel.getPlaceById(placeId);
    const coordinate = await this.geocodingService.getCoordinate(place.address);

    return { ...place, coordinate };
  }

  async getPlaces() {
    const places = this.placeModel.getAllPlaces();

    const placeList = await Promise.all(
      places.map(
        async (place) => {
          const coordinate = await this.geocodingService.getCoordinate(place.address);

          return { ...place, coordinate };
        },
      ),
    );

    return placeList;
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
