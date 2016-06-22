(function() {
  'use strict';

  angular
    .module('teaApp')
    .controller('EditController', EditController)

    function EditController ($scope, teaService) {
      $scope.vm = {};
      $scope.vm.cart = teaService.getCart();
      $scope.vm.total= teaService.orderTotal();


    }


})();
