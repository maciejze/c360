'use strict';
(function() {
  angular.module('c360App')
    .directive('draggable', function($timeout) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {

          $timeout(function() {
            $(element).draggable({
              revert: 'invalid'
            });
          }, 100);

        }
      }
    })
})();
