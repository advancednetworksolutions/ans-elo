'use strict';

angular.module('ansEloApp')
  .controller('GameCtrl', function (socket,$location,$http,$scope,$routeParams,$timeout) {
    $scope.params = $routeParams;
    $scope.message = 'Hello';
    $scope.games = [];
    $scope.game = {
      name:"",
      rating_system:""
    };
    this.players = [];
    if($scope.params.id){
      $http.get('/api/games/'+$scope.params.id).then(response => {
        $scope.games[0] = response.data;

        for(var i=0;i<$scope.games[0].results.length;i++){
          var date = new Date();
          var duration = moment.duration(moment().diff($scope.games[0].results[i].game_date));
          var time = duration.asMinutes();
          var measure = '';
          if(time < 60){
            time = duration.asMinutes()+' minutes';
            measure = ' minutes';
          }else if(time > 59){
            time = duration.asHours()+ ' hours';
            measure = ' hours';

          }else if(time > 1439){
            if(time<2880){
              time = duration.asDays()+ ' day';
              measure = ' day';

            }else{
              time = duration.asDays()+ ' days';
              measure = ' days';

            }
          }
          $scope.games[0].results[i].timePassed = parseInt(time)+measure;
        }
        for(var i =0;i<$scope.games[0].players.length;i++){
          if($scope.games[0].players[i].delta){
            if($scope.games[0].players.delta > 0){
              $scope.games[0].players.delta = '+'+$scope.games[0].players.delta;
            }
          }
        }
        console.log(response);
        socket.syncUpdates('game', $scope.games);
        var chartValues = [];
        var labels = [];
        var colors = [];
        var datasets = [];
        var backgroundColors = [
                'rgba(46, 204, 113,0.7)',
                'rgba(155, 89, 182,0.7)',
                'rgba(52, 152, 219,0.7)',
                'rgba(26, 188, 156,0.7)',
                'rgba(231, 76, 60,0.7)',
                'rgba(52, 73, 94,0.7)'
            ];

        $scope.games[0].players.sort(function(a,b){
          return parseFloat(b.points) -parseFloat(a.points);
        });
        for(var i = 0;i<$scope.games[0].players.length;i++){
          if(i<5){
            labels.push($scope.games[0].players[i].name);
            datasets.push({
              label:$scope.games[0].players[i].name,
              data:[
                {
                    x: $scope.games[0].players[i].wins,
                    y: $scope.games[0].players[i].points,
                    r: $scope.games[0].players[i].wins+$scope.games[0].players[i].losses
                }
              ],
              backgroundColor:backgroundColors[i],
              hoverBackgroundColor: backgroundColors[i],
            });
          }
        }
        for(var i =0;i<$scope.games[0].players.length;i++) {
            chartValues.push($scope.games[0].players[i].points);
            colors.push('rgba(247, 142, 30, .5)');
        }
        $scope.chartData = {
        labels: labels,
        datasets: [
            {
                label: "Player",
                borderWidth: 1,
                backgroundColor:colors,
                data: chartValues,
            }
        ]
    };
    //console.log($scope.chartData);
        /*var ctx = document.getElementById('leaderboard-chart');
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: $scope.chartData
          });*/
          $scope.bubbleChartData = {datasets};
          var ctx2 = document.getElementById('leaderboard-bubble-chart');
          var myBubbleChart = new Chart(ctx2, {
              type: 'bubble',
              data: $scope.bubbleChartData
            });
      });



      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('game');

      });
    }


$timeout(function(){
  for(var i=0;i<$scope.games[0].results.length;i++){
    var date = new Date();
    var duration = moment.duration(moment().diff($scope.games[0].results[i].game_date));
    var time = duration.asMinutes();
    var measure = '';
    if(time < 60){
      time = duration.asMinutes()+' minutes';
      measure = ' minutes';
    }else if(time > 59){
      time = duration.asHours()+ ' hours';
      measure = ' hours';

    }else if(time > 1439){
      if(time<2880){
        time = duration.asDays()+ ' day';
        measure = ' day';

      }else{
        time = duration.asDays()+ ' days';
        measure = ' days';

      }
    }
    $scope.games[0].results[i].timePassed = parseInt(time)+measure;
  }
}, 10000);

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('game');
    });

    $scope.saveGame = function(){
      $http.post('/api/games',$scope.game).then(function(response){
        console.log(response);
        $scope.game = {
          name:"",
          rating_system:""
        };
        $location.path('/');
      });
    }

    $scope.go = function(path){
      console.log('clicked!');
      $location.path(path);
    }

    $scope.leaderboard = function(){
      console.log('clicked');
      $location.path('/game/'+$scope.params.id+'/leaderboard');
    }
  });
