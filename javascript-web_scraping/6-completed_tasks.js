#!/usr/bin/node

const request = require('request');

function countCompletedTasks (apiUrl) {
  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    const tasks = JSON.parse(body);
    const completedTasksByUser = {};

    tasks.forEach(task => {
      if (task.completed) {
        if (completedTasksByUser[task.userId]) {
          completedTasksByUser[task.userId]++;
        } else {
          completedTasksByUser[task.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUser);
  });
}

const apiUrl = process.argv[2];
countCompletedTasks(apiUrl);
