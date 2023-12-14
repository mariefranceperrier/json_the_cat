const request = require('request');
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?';

const fetchBreedDescription = function(breedName, callback) {
  const url = apiUrl + 'q=' + breedName;
  
  request.get(url, (error, response, body) => {
    if (error) {
      console.log('error:', error);

    } else if (response.statusCode !== 200) {
      console.log('statusCode:', response && response.statusCode);

    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        console.log('Breed not found');

      } else {
        console.log(data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };