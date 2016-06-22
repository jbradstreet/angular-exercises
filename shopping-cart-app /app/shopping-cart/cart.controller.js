(function() {
  'use strict';

  angular
    .module('teaApp')
    .controller('CartController', CartController)

    function CartController ($scope, teaService) {
      $scope.vm = {};
      $scope.vm.cart = teaService.getCart();
      $scope.vm.total = teaService.orderTotal();

      $scope.vm.deleteItem = function(item) {
        var index = $scope.vm.cart.indexOf(item);
        $scope.vm.cart.splice(index, 1);
      }

    }


})();
