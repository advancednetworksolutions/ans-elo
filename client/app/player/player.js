'use strict';

angular.module('ansEloApp')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/player/new', {
      templateUrl: 'app/player/new_player.html',
      controller: 'PlayerCtrl',
      authenticate: 'true'
    })
    .when('/player/{id}', {
        templateUrl: 'app/player/player.html',
        controller: 'PlayerCtrl',
        authenticate: 'true'
      });
  });
