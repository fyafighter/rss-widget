'use strict';

var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;

gulp.task('e2e', function() {
  return gulp.src('./test/e2e/**/*_test.js')
    .pipe(protractor({
      configFile: './test/protractor.config.js'
    }));
});

gulp.task('default', []);
