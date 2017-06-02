'use strict';

require('mocha');
var isTravis = process.env.CI || process.env.TRAVIS;
var npm = require('npm-install-global');
var assert = require('assert');
var exists = require('./');

describe('global-module-exists', function() {
  it('should export a function', function() {
    assert.equal(typeof exists, 'function');
  });

  it('should return true when a package exists', function(cb) {
    if (isTravis) return this.skip();
    this.timeout(10000);
    npm.install('isobject', function(err) {
      if (err) return cb(err);
      assert(exists('isobject'));
      cb();
    });
  });

  it('should return false when a package does not exist', function() {
    assert(!exists('fosfijsfsfljsfkjsksflskjfslkjlksjfl'));
  });

  it('should throw an error when invalid args are passed', function() {
    assert.throws(function() {
      exists();
    });
  });
});
