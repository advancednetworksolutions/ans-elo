'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket,$location) {
    this.$http = $http;
    this.games = [];
    this.players = [];
    this.$location = $location;

    $http.get('/api/games').then(response => {
      this.games = response.data;
      console.log(response);
      socket.syncUpdates('game', this.games);
    });

    $http.get('/api/players').then(response => {
      this.players = response.data;
      console.log(response);
      socket.syncUpdates('player', this.players);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('game');
      socket.unsyncUpdates('player');

    });

  }

  go(path){
    console.log('clicked!');
    this.$location.path(path);
  }

}

angular.module('ansEloApp')
  .controller('MainController', MainController);

})();
