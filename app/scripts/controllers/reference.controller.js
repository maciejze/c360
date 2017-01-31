'use strict';
(function() {
  angular.module('c360App')
    .controller('ReferenceController', function($timeout, TILES) {
      var vm = this;
      vm.opacity = 0;
      vm.expansions = [{name:'basic'},{name:'exp1'},{name:'exp2'},{name:'exp3'}];
      vm.activeFilters = [];
      vm.tiles = TILES; 

      $timeout(function() {
        vm.opacity = 1
      }, 100)


    })


})();
