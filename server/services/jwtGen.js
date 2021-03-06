'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'secreto';

exports.createToken = function(user){
    var payload = {
        sub: 0,
        name: user.name,
        iat: moment().unix(),
        exp: moment().add(15, 'minutes').unix()
    };

    return jwt.encode(payload, secret);
}