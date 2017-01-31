'use strict';
(function() {

  angular.module('c360App')
    .value('TILES', [{
      expansion: ['main', 'exp1'],
      name: 'church',
      imageUrl: 'c-main.jpg'

    }, {
      expansion: ['exp1'],
      name: 'city',
      imageUrl: 'city-main.jpg'

    }, {
      expansion: ['exp2'],
      name: 'church-road',
      imageUrl: 'cr-main.jpg'

    }])
})();
