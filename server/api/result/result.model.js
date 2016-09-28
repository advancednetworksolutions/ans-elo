'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ResultSchema = new Schema({
  status:String,
  name: String,
  winner:String,
  loser:String,
  game:String,
  game_date:Date,
  rating_system:String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Result', ResultSchema);
