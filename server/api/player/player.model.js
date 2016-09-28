'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: {
    type:String,
    required:true
  },
  email: String,
  points:Number,
  results:[],
  wins:Number,
  losses:Number,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Player', PlayerSchema);
