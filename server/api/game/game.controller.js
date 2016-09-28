/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/games              ->  index
 * POST    /api/games              ->  create
 * GET     /api/games/:id          ->  show
 * PUT     /api/games/:id          ->  update
 * DELETE  /api/games/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Game = require('./game.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.extend(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Games
exports.index = function(req, res) {
  Game.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Game from the DB
exports.show = function(req, res) {
  Game.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Game in the DB
exports.create = function(req, res) {
  Game.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Game in the DB
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }

  Game.findById(req.params.id, function (err, game) {
    if (err) { return handleError(err); }
    if(!game) { return res.send(404); }

    // var updated = _.merge(list, req.body);

   var updated =   _.extend(game, req.body);

    //changed from updated to 'list'
    game.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, game);
    });
  });
};

// Deletes a Game from the DB
exports.destroy = function(req, res) {
  Game.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
