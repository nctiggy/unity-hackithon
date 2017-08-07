'use strict';
var rest = require('./restler');

exports.getSoftware = function(args, res, next) {
  /**
   * Query unity code levels
   * 
   *
   * returns List
   **/
    rest.get('https://192.168.0.34/api/types/basicSystemInfo/instances', {
        X-EMC-REST-CLIENT: true,
        Authorization: 'Basic YWRtaW46UGFzc3dvcmQjMQ==',
        Accept: 'application/json'
    }).on('complete', function(result) {
        if (result instanceof Error) {
            console.log('Error:', result.message)
            this.retry(5000);
        } else {
            
        }
    })
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

