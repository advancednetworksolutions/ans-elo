'use strict';

angular.module('ansEloApp')
  .controller('LeaderboardCtrl', function ($scope,$http,$routeParams,socket) {
    $scope.message = 'Hello';
    $scope.games = [];
    $scope.params = $routeParams;

    $http.get('/api/games/'+$scope.params.id).then(function(response){
      $scope.games[0] = response.data;
      socket.syncUpdates('game', $scope.games);

    });
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('game');
    });
  });
