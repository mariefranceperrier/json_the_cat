const request = require('request');
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?';

const fetchBreedDescription = function(breedName, callback) {
  const url = apiUrl + 'q=' + breedName;
  
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);

    } else if (response.statusCode !== 200) {
      callback(error, null);

    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        callback('Breed not found', null);

      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };