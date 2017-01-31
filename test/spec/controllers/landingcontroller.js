'use strict';

describe('Controller: LandingcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('c360App'));

  var LandingcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LandingcontrollerCtrl = $controller('LandingcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LandingcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
