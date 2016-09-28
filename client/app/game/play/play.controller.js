'use strict';

angular.module('ansEloApp')
  .controller('PlayCtrl',['$scope','elo','$http','$location','$routeParams', function ($scope,elo,$http,$location,$routeParams,socket) {
    $scope.elo = elo;
    $scope.params = $routeParams;
    $scope.players = [];
    $scope.games = [];
    $scope.player1 = {};
    $scope.player2 = {};
    $scope.gamesInProgress = {};
    $scope.gameStart = false;
    $http.get('/api/games/'+$scope.params.id).then(function(response){
      $scope.games[0] = response.data;
      socket.syncUpdates('game', $scope.games);
    });
    $http.get('/api/players').then(function(response){
      $scope.players = response.data;
      console.log($scope.players);
    });
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('game');
    });

$scope.changeSelectedItem = function(item){
  if(item == '1'){
    console.log($scope.player1.name.name);
  }else{
    console.log($scope.player2.name.name)
  }
}
    var $scope = $scope;
    $scope.startGame = function(){
      $scope.gameStart = true;
    //find selected players
    //check if they exist in players array in game object
    //push player to players array if they do not exist
    //update the game object in mongo
    //set the gameStart flag to true to make in  progress html visible

          var match1 = 0;
          var match2 = 0;
          if($scope.games[0].players.length > 0){
            for(var j = 0;j<$scope.games[0].players.length;j++){
              if($scope.player1.name.name == $scope.games[0].players[j].name){
                match1++;
                $scope.player1.name.points = $scope.games[0].players[j].points;
                console.log('player1 matched');
                console.log($scope.games[0].players[j].name);
              }
            }
            for(var j = 0;j<$scope.games[0].players.length;j++){
              if($scope.player2.name.name == $scope.games[0].players[j].name){
                match2++;
                $scope.player2.name.points = $scope.games[0].players[j].points;
                console.log('player2 matched');
                console.log($scope.games[0].players[j].name);
              }
            }
            if(match1 == 0){
              console.log('no matches for player 1');
                for(var i = 0;i<$scope.players.length;i++){
                  if($scope.players[i].name == $scope.player1.name.name){
                    console.log($scope.players[i]);
                    $scope.players[i].wins = 0;
                    $scope.players[i].losses = 0;
                    $scope.players[i].points = 1000;
                    $scope.games[0].players.push($scope.players[i]);
                    $http.put('/api/games/'+$scope.params.id,$scope.games[0]).then(function(response){
                      console.log($scope.games[0]);
                      $scope.games[0] = response.data;
                      console.log(response.data);
                    });
                  }
                }
            }
            if(match2 == 0){
              console.log('no matches for player 2');
              for(var t = 0;t<$scope.players.length;t++){
                if($scope.players[t].name == $scope.player2.name.name){
                  console.log($scope.players[t]);
                  $scope.players[t].wins = 0;
                  $scope.players[t].losses = 0;
                  $scope.players[t].points = 1000;
                  $scope.games[0].players.push($scope.players[t]);
                  $http.put('/api/games/'+$scope.params.id,$scope.games[0]).then(function(response){
                    console.log($scope.games[0]);
                    $scope.games[0] = response.data;
                    console.log(response.data);
                  });

                }
              }
            }
          }else{
            for(var t = 0;t<$scope.players.length;t++){
              if($scope.players[t].name == $scope.player2.name.name){
                console.log($scope.players[t]);
                $scope.players[t].wins = 0;
                $scope.players[t].losses = 0;
                $scope.players[t].points = 1000;
                $scope.games[0].players.push($scope.players[t]);
              }else if($scope.players[t].name == $scope.player1.name.name){
                console.log($scope.players[t]);
                $scope.players[t].wins = 0;
                $scope.players[t].losses = 0;
                $scope.players[t].points = 1000;
                $scope.games[0].players.push($scope.players[t]);
              }
            }
          }
          $scope.player1.name.chanceToWin = Math.round(elo.newEloRatings($scope.player1.name.points,$scope.player2.name.points,0).getChanceToWin *100);
          $scope.player2.name.chanceToWin = Math.round(elo.newEloRatings($scope.player2.name.points,$scope.player1.name.points,0).getChanceToWin * 100);

          $scope.gameInProgress = {
            _id:elo.mongoObjectId(),
            status:"In Progress",
            players:[$scope.player1,$scope.player2],
            player1:$scope.player1,
            player2:$scope.player2,
            winner:"",
            loser:"",
            game_date:new Date(),
          }
          console.log('points:'+$scope.gameInProgress.player1.points);
          console.log($scope.gameInProgress);
          $scope.games[0].results.push($scope.gameInProgress);
          $http.put('/api/games/'+$scope.params.id,$scope.games[0]).then(function(response){
            console.log($scope.games[0]);
            $scope.games[0] = response.data;
            console.log(response.data);

          });

    }

    $scope.endGame = function(){
      $scope.gameEnded = true;
    }
    $scope.finalizeGame = function(){

      //increment winner's wins in game.players object
      for(var i =0;i<$scope.games[0].players.length;i++){
        if($scope.games[0].players[i].name == $scope.gameInProgress.winner){
          for(var j =0;j<$scope.games[0].players.length;j++){
            if($scope.games[0].players[j].name == $scope.gameInProgress.loser){
              //winner's rating
              $scope.games[0].players[i].points = elo.newEloRatings($scope.games[0].players[i].points,$scope.games[0].players[j].points,1).getNewRating;
              $scope.games[0].players[i].delta = elo.newEloRatings($scope.games[0].players[i].points,$scope.games[0].players[j].points,1).getRatingDelta;
              $scope.games[0].players[i].wins++;
              //loser's rating
              $scope.games[0].players[j].points = elo.newEloRatings($scope.games[0].players[j].points,$scope.games[0].players[i].points,0).getNewRating;
              $scope.games[0].players[j].delta = elo.newEloRatings($scope.games[0].players[j].points,$scope.games[0].players[i].points,0).getRatingDelta;
              $scope.games[0].players[j].losses++;
            }
          }
        }
      }
      //set status of result to Final
      for(var i =0;i<$scope.games[0].results.length;i++){
        if($scope.games[0].results[i]._id == $scope.gameInProgress._id){
          $scope.gameInProgress.status = 'Final';
          $scope.games[0].results[i] = $scope.gameInProgress;
          $http.put('/api/games/'+$scope.params.id,$scope.games[0]).then(function(response){
            console.log($scope.games[0]);
            $scope.games[0] = response.data;
            console.log(response.data);
            $location.path('/game/'+$scope.params.id);
          });
          console.log($scope.games[0]);
        }
      }



    }
  }]);
