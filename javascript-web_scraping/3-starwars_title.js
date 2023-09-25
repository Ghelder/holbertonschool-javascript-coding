#!/usr/bin/node
const request = require('request');

function getMovieTitle (movieId) {
  const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

  request.get(url, (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      const movie = JSON.parse(body);
      console.log(`${movie.title}`);
    }
  });
}

const movieId = process.argv[2];
getMovieTitle(movieId);
