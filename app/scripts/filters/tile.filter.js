'use strict';
(function() {
  angular.module('c360App')
  .filter('tileFilter', function(){
      return function(input, filters){
        console.log(input, filters);
        if(filters.length === 0){
          return input;
        }
        var output = []
        for(var i = 0; i<input.length; i++){
          if(filters.indexOf(input[i].expansion)  !== -1){
            output.push(input[i]);
          };
        }

        return output;
      }
  })
})()
