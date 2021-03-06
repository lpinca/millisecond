describe('millisecond', function () {
  'use strict';

  var assume = require('assume')
    , ms = require('./');

  it('should preserve ms', function () {
    assume(ms('100')).to.equal(100);
  });

  it('can parse numbers', function () {
    assume(ms(100)).to.equal(100);
  });

  it('should convert from m to ms', function () {
    assume(ms('1m')).to.equal(60000);
    assume(ms('1min')).to.equal(60000);
    assume(ms('1mins')).to.equal(60000);
    assume(ms('1minute')).to.equal(60000);
    assume(ms('1minutes')).to.equal(60000);
  });

  it('should convert from h to ms', function () {
    assume(ms('1h')).to.equal(3600000);
    assume(ms('1hr')).to.equal(3600000);
    assume(ms('1hrs')).to.equal(3600000);
    assume(ms('1hour')).to.equal(3600000);
    assume(ms('1hours')).to.equal(3600000);
  });

  it('should convert d to ms', function () {
    assume(ms('2d')).to.equal(172800000);
    assume(ms('2day')).to.equal(172800000);
    assume(ms('2days')).to.equal(172800000);
  });

  it('should convert s to ms', function () {
    assume(ms('1s')).to.equal(1000);
    assume(ms('1sec')).to.equal(1000);
    assume(ms('1secs')).to.equal(1000);
    assume(ms('1second')).to.equal(1000);
    assume(ms('1seconds')).to.equal(1000);
  });

  it('should convert ms to ms', function () {
    assume(ms('100ms')).to.equal(100);
  });

  it('should work with decimals', function () {
    assume(ms('1.5h')).to.equal(5400000);
  });

  it('should work with multiple spaces', function () {
    assume(ms('1   s')).to.equal(1000);
  });

  it('should return 0 if invalid', function () {
    assume(ms('Hello mom')).to.equal(0);
  });

  it('should be case-insensitive', function () {
    assume(ms('1.5H')).to.equal(5400000);
  });

  it('should work with numbers starting with .', function () {
    assume(ms('.5ms')).to.equal(0.5);
  });
});
