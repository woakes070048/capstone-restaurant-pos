'use strict';

var app = require('angular').module('pos');

// indexes all the controllers to add to the 'pos' module.
app.controller('loginCtrl', require('./loginCtrl'));
app.controller('profileCtrl', require('./profileCtrl'));
app.controller('testCtrl', require('./testCtrl'));
