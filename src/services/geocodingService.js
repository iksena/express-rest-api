class GeocodingService {
  geocodingAPIModel;

  constructor(geocodingAPIModel) {
    this.geocodingAPIModel = geocodingAPIModel;
  }

  async getCoordinate(address) {
    const [geocoding] = await this.geocodingAPIModel.getPlaceByAddress(address);
    const coordinate = geocoding?.geometry?.location;

    return coordinate;
  }
}

module.exports = GeocodingService;
