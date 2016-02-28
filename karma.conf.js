'use strict';

var appConfig = require('./config');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'lib/*.js',
      'test/*.js'
    ],

    exclude: [
    ],

    reporters: appConfig.karma.reporters,


    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: appConfig.karma.autoWatch,

    browsers: appConfig.karma.browsers
  });
};