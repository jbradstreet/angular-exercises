(function() {
  'use strict';

  angular
  .module('movieApp', ['ngRoute'])
  .controller("SearchController", SearchController)

  .config(function($routeProvider, $locationProvider) {
    // add url variable after moviesearch (similar to express)
    //:nameofparameter, which can be whatever you want to call it

    $routeProvider.when('/movieSearch/:userInput', {
      templateUrl: './movieSearch/movieSearch.html',
      controller: 'omdbController'
    }).when('/movieSearch/movie/:movieID', {
      templateUrl: './movieInfo/movieInfo.html',
      controller: 'movieController'
    }).otherwise({
      redirectTo: '/'
    })
    $locationProvider.html5Mode(true);
  })


  // this is my Search Contoller!
  function SearchController($scope, $location) {
    $scope.vm = {};
    $scope.vm.title = '';

    $scope.vm.titleSearch = function() {
      $location.path('/movieSearch/' + $scope.vm.title)
    }
  }

})();
