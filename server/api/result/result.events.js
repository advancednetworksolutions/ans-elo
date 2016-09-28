/**
 * Result model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Result = require('./result.model');
var ResultEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ResultEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Result.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ResultEvents.emit(event + ':' + doc._id, doc);
    ResultEvents.emit(event, doc);
  }
}

module.exports = ResultEvents;
