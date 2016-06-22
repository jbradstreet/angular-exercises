(function() {
  angular
    .module('movieApp')
    .controller('movieController', movieController)

    function movieController($scope, $http, $routeParams) {
      $scope.vm = {};

      $http.get('http://www.omdbapi.com/?i=' + $routeParams.movieID).then(function(result){
        console.log(result);
        $scope.vm.movie = result;
      })


    }


})();
