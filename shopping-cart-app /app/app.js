(function() {
  'use strict';

  angular
    .module('teaApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'tea-items/tea.html',
        controller: 'TeaController'
      }).when('/shoppingCart', {
        templateUrl: 'shopping-cart/cart.html',
        controller: 'CartController'
      }).when('/shoppingCart/edit/:teaID', {
        templateUrl: 'edit-order/edit.html',
        controller: 'EditController'
      })
    })
    .directive('caffeineMeter', function() {
      return {
        restrict: 'E',
        templateUrl: 'tea-items/caffeine-meter.html',
        scope: {
          caffeinemg: '='
        },
        controller: function($scope) {
          var newVal = (($scope.caffeinemg/244) * 180);

          $scope.transformStyle = {transform: `rotate(${newVal}deg)`};

        }
      }
    })

})();
