'use strict';
(function() {
  angular.module('c360App')
    .directive('droppable', function($timeout) {
      return {
        restrict: 'A',
        scope: {
          filters: '=filters',
          expansions: '=expansions',
        },
        link: function(scope, element, attrs) {

          $timeout(function() {
            $(element).droppable({
              drop: function(event, ui) {
                var expName = ui.draggable[0].attributes['element-name'].value;
                for (var i = 0; i < scope.expansions.length; i++) {
                  if (scope.expansions[i].name === expName) {
                    var exp = scope.expansions[i];
                  }
                }

                if (!contains(exp, scope.filters)) {
                  scope.filters.push(exp);
                }


                scope.$apply();
              },
              hoverClass: 'drop-hover',
              accept: '.element',
              tolerance: 'fit',

            });
          }, 100);

          function contains(obj, list) {
            var x;
            for (x in list) {
              if (list.hasOwnProperty(x) && list[x] === obj) {
                return true;
              }
            }

            return false;
          }
        }
      }
    });
})();
