const NodeGeocoder = require('node-geocoder')

const options = {
  provider: process.env.GEOCODER_PROVIDER,

  httpAdaper: 'https',
  apiKey: process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;