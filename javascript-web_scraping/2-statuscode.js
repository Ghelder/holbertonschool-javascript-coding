#!/usr/bin/node

const request = require('request');

function displayStatusCode (url) {
  request.get(url, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`code: ${response.statusCode}`);
    }
  });
}

const url = process.argv[2];
displayStatusCode(url);
