const { v4: uuidv4 } = require('uuid');

let placesData = [];

class Place {
  createPlace(payload) {
    const { name, address, city } = payload;

    placesData.push({
      id: uuidv4(),
      name,
      address,
      city,
    });
  }

  getAllPlaces() {
    return placesData;
  }

  getPlaceById(placeId) {
    const foundPlace = placesData.find((place) => place.id === placeId);

    return foundPlace;
  }

  updatePlace(placeId, payload) {
    const foundPlace = this.getPlaceById(placeId);

    if (!foundPlace) {
      throw new Error('Place is not found');
    }

    placesData = placesData.filter((place) => place.id !== placeId);
    placesData.push({
      ...foundPlace,
      ...payload,
    });
  }
}

module.exports = {
  Place,
  placesData,
};
