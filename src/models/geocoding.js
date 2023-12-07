const { default: axios } = require('axios');
const NotFoundError = require('../errors/notFoundError');

class GeocodingAPI {
  apiKey;
  axiosRequestGeocoding;

  constructor(apiKey) {
    this.apiKey = apiKey;
    this.axiosRequestGeocoding = axios.create({
      baseURL: 'https://maps.googleapis.com/maps/api/geocode',
      params: {
        key: apiKey,
      },
    });
  }

  async getPlaceByAddress(address) {
    try {
      const { data } = await this.axiosRequestGeocoding.get('/json', {
        params: {
          address,
        },
      });

      return data?.results;
    } catch (error) {
      console.log('Geocoding results for this address is not found', { error, address });

      throw new NotFoundError('Geocoding results for this address is not found', { error, address });
    }
  }
}

module.exports = GeocodingAPI;
