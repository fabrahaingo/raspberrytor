const Promise = require("bluebird");
const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./data.db");

// https://github.com/mapbox/node-sqlite3/wiki/API

get = function(...args) {
  return new Promise(function(resolve, reject) {
    db.get(...args, function(err, row) {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

all = function(...args) {
  return new Promise(function(resolve, reject) {
    db.all(...args, function(err, rows) {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

run = function(...args) {
  return new Promise(function(resolve, reject) {
    db.run(...args, function(err, res) {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

exec = function(...args) {
  return new Promise(function(resolve, reject) {
    db.exec(...args, function(err, res) {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

module.exports = {
  get,
  all,
  run,
  exec,
};