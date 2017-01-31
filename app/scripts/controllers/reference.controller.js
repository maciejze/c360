'use strict';
(function() {
  angular.module('c360App')
    .controller('ReferenceController', function($timeout) {
      var vm = this;
      vm.opacity = 0;
      vm.expansions = ['basic', 'exp1', 'exp2', 'exp3'];
      $timeout(function() {
        vm.opacity = 1
      }, 100)


    }).directive('draggable', function() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).draggable();
        }
      }
    })
    .directive('droppable', function() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).droppable({
              drop:function(event, ui) {
                console.log(ui);
              },
              hoverClass: "drop-hover"
            });
        }
      }
    });
})();
