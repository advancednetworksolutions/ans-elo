'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  info: String,
  type: String,
  rating_system: String,
  results:[],
  players:[],
  active: Boolean
});

module.exports = mongoose.model('Game', GameSchema);
