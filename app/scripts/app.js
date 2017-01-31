'use strict';

/**
 * @ngdoc overview
 * @name c360App
 * @description
 * # c360App
 *
 * Main module of the application.
 */
angular
  .module('c360App', [
    'ngRoute',
    'ngTouch',
    'ui.router',
    'ngAnimate'
  ]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/landing');
    $stateProvider.state({
      name: 'landing',
      url: '/landing',
      templateUrl: '/views/landing.template.html',
      controller: 'LandingController',
      controllerAs: 'landing'
    }).state({
      name: 'reference',
      url: '/reference',
      templateUrl: '/views/reference.template.html',
      controller: 'ReferenceController',
      controllerAs: 'reference'
    });

  });
