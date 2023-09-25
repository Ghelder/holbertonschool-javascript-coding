#!/usr/bin/node
const request = require('request');

function countMoviesWithCharacter (apiUrl, characterId) {
  const url = `${apiUrl}?format=json`;

  request.get(url, (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      const films = JSON.parse(body).results;
      const moviesWithCharacter = films.filter((film) =>
        film.characters.includes(
          `https://swapi-api.hbtn.io/api/people/${characterId}/`
        )
      );
      console.log(
        `${moviesWithCharacter.length}`
      );
    }
  });
}

const apiUrl = process.argv[2];
const characterId = 18;
countMoviesWithCharacter(apiUrl, characterId);
