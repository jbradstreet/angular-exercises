(function() {
  angular
    .module('movieApp')
    .controller('omdbController', omdbController)

    // $routeParams

    function omdbController($scope, $http, $routeParams) {
      $scope.vm = {};


      $http.get('http://www.omdbapi.com/?s=' + $routeParams.userInput)
      .then(function(result) {
        // log the result to figure out what to target for the data I want
        console.log(result);
        $scope.vm.omdbData = result.data.Search;
      })

    }

})();
