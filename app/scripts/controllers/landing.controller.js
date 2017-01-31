'use strict';
(function() {
  angular.module('c360App')
    .controller('LandingController', function($state, $timeout) {
        var vm = this;
        vm.hidden = false;
        vm.start = start;

        function start(){
          vm.hidden = true;
          $timeout(function(){
            $state.go('reference');
          },1000)
        }
    })
})();
