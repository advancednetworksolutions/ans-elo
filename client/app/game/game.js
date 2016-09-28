'use strict';

angular.module('ansEloApp')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/game/new/', {
      templateUrl: 'app/game/new_game.html',
      controller: 'GameCtrl',
      authenticate: true
    }).when('/game/:id', {
        templateUrl: 'app/game/individual_game.html',
        controller: 'GameCtrl',
        authenticate: true
      }).when('/game/:id/leaderboard', {
        templateUrl: 'app/game/leaderboard/leaderboard.html',
        controller: 'LeaderboardCtrl'
      }).when('/game/:id/play', {
        templateUrl: 'app/game/play/play.html',
        controller: 'PlayCtrl'
      });
  });
