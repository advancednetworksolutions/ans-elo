'use strict';

angular.module('ansEloApp')
  .controller('PlayerCtrl', function ($scope,$http,$location) {
    $scope.player = {
      name:"",
      email:"",
      points:1000
    };

    function go(){
      $location.path('/');
    }

    function alertWithMessage(msg,cb){
      alert(msg);
      cb();
    }

    $scope.savePlayer = function(){
      var msg = "";
      if($scope.player.name !== '' && $scope.player.email !== ''){
        try{
          $http.post('/api/players',$scope.player).then(function(response){
            console.log(response);
            $scope.player = {
              name:"",
              email:""
            };
            if(response.status == 201){
              msg = "Player created successfully!";
              alertWithMessage(msg,go);
            }else{
              console.log('nope');
            }
          });
        }catch(e){
          console.log(e);
          msg = e;
          alertWithMessage(msg,go);
        }
      }else{
        alert('Gotta choose a name!');
      }

    }
  });
