'use strict';

var gulp = require('gulp');
var btccoreTasks = require('btccore-build');

btccoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
