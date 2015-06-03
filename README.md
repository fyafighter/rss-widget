'use strict';
var gulp = require('gulp');
require('@propel/jumpstart-engine-angular-express-sass').expressAndAngular();
// Enable gulp tasks for packaging
require('@propel/gulp-jumpstart-web-packager')();
require('@propel/gulp-jumpstart-archiver')();
 
gulp.task('default', ['serve']);


