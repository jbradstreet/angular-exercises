(function() {
  'use strict';

  angular
    .module('teaApp')
    .controller('TeaController', TeaController)

    // teaService is the name of my factory-service
    function TeaController($scope, teaService) {

      $scope.vm = {};
      $scope.vm.searchCategory = '';
      $scope.vm.sortPrice = '';
      $scope.vm.itemCount = 0;


      // connect data from tea.service to tea.controller
      teaService.getItems().then(function(data) {
        $scope.vm.teas = data;
      })

      // function to add item cart, this same function will also be used in the service file.
      $scope.vm.addToCart = function(tea, qty) {

        teaService.addToCart(tea, qty);
        $scope.vm.itemCount = teaService.cartCount();
      }

    }


})();
