'use strict';

var url = require('url');

var Software = require('./SoftwareService');

module.exports.getSoftware = function getSoftware (req, res, next) {
  Software.getSoftware(req.swagger.params, res, next);
};
