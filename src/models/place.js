const { v4: uuidv4 } = require('uuid');
const NotFoundError = require('../errors/notFoundError');

let placesData = [
  {
    id: '1',
    name: 'Home Address',
    address: 'Jl. Rasuna Said No. 11',
    city: 'South Jakarta',
  },
];

class Place {
  createPlace(payload) {
    const { name, address, city } = payload;

    const place = {
      id: uuidv4(),
      name,
      address,
      city,
    };
    placesData.push(place);

    return place;
  }

  getAllPlaces() {
    return placesData;
  }

  getPlaceById(placeId) {
    const foundPlace = placesData.find((place) => place.id === placeId);

    return foundPlace;
  }

  updatePlaceById(placeId, payload) {
    const foundPlace = this.getPlaceById(placeId);

    if (!foundPlace) {
      throw new NotFoundError('Place is not found');
    }

    placesData = placesData.filter((place) => place.id !== placeId);
    const updatedPlace = {
      ...foundPlace,
      ...payload,
    };
    placesData.push(updatedPlace);

    return placesData;
  }
}

module.exports = Place;
