(function() {
  'use strict';

  angular
    .module('teaApp')
    .factory('teaService', teaService)

    function teaService($http, $q) {
      var teaItems = [];
      var cart = [];

      return {

        getItems: function () {
          if (teaItems.length == 0 ) {
            return $http.get('/tea-items/tea.json').then(function(result) {
              teaItems = result.data;
              return teaItems;
            })
          } else {
            return $q(function(resolve, reject) {
              resolve(teaItems);
            });
          }
        },

        addToCart: function(tea, qty) {
          // if cart is empty, add item to cart
          if ( cart.indexOf(tea) < 0 ) {
            cart.push(tea);
            tea.qty = parseInt(qty);
            console.log(cart);
          } else {
            // else if item already in cart, modify qty
            tea.qty += parseInt(qty);
          }
        },

        cartCount: function() {
          // this returns the number of different array objects, i.e. the different number of unique items added to the cart
          return cart.length;
        },

        getCart: function() {
          return cart;
          console.log(cart);
        },

        orderTotal: function() {
          var total = 0;
          for (var i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].qty;
          }
          return total;
          
        }

      }

    }

})();
