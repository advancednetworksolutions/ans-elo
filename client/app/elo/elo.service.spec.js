'use strict';

describe('Service: elo', function () {

  // load the service's module
  beforeEach(module('ansEloApp'));

  // instantiate service
  var elo;
  beforeEach(inject(function (_elo_) {
    elo = _elo_;
  }));

  it('should do something', function () {
    expect(!!elo).toBe(true);
  });

});
