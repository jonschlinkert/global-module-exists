'use strict';

var fs = require('fs');
var path = require('path');
var gm = require('global-modules');

module.exports = function(name) {
  return fs.existsSync(path.resolve(gm, name));
};
