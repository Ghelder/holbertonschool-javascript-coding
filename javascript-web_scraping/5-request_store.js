#!/usr/bin/node

const request = require('request');
const fs = require('fs');

function saveWebpageToFile (url, filePath) {
  const fileStream = fs.createWriteStream(filePath, { encoding: 'utf-8' });

  request
    .get(url)
    .pipe(fileStream)
    .on('finish', () => {
    });
}

const url = process.argv[2];
const filePath = process.argv[3];
saveWebpageToFile(url, filePath);
