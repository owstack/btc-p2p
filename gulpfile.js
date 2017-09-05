'use strict';
var gulp = require('gulp');
var owsTasks = require('ows-build');
owsTasks('btccore', 'p2p', {skipBrowser: true});
gulp.task('default', ['lint', 'coverage']);
