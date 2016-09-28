'use strict';

angular.module('ansEloApp')
  .service('elo',function () {
    return {
      mongoObjectId : function () {
          var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
          return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
              return (Math.random() * 16 | 0).toString(16);
          }).toLowerCase();
      },
      newEloRatings:function(player1,player2,result){
        function getRatingDelta(player1, player2, result) {
            if ([0, 0.5, 1].indexOf(result) === -1) {
              return null;
            }
            var myChanceToWin = 1 / ( 1 + Math.pow(10, (player2 - player1) / 400));

            return Math.round(32 * (result - myChanceToWin));
          }
          function myChances(player1, player2){
            return 1 / ( 1 + Math.pow(10, (player2 - player1) / 400));
          }
          function getNewRating(player1, player2, result) {
            return player1 + getRatingDelta(player1, player2, result);
          }
          return {
            getRatingDelta: getRatingDelta(player1, player2, result),
            getNewRating: player1 + getRatingDelta(player1, player2, result),
            getChanceToWin:myChances(player1,player2)
          };
    }
  }
});
