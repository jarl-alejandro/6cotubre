'use strict'

const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')

gulp.task('build', function(){
  browserify('./public/app/scripts/app')
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/dist/js'))
})

gulp.task('default', ['build'])
