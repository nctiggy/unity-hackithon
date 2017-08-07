'use strict';

exports.getSoftware = function(args, res, next) {
  /**
   * Query unity code levels
   * 
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "serialNumber" : "aeiou",
  "softwareVersion" : "4.2.0"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

