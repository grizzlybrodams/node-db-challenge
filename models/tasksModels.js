const db = require('../data/db-config.js');

module.exports = {
      getTask,
      addTask
};

function getTask() {
      return("tasks");
}

function addTask(body) {
      return("tasks").insert(body)
}