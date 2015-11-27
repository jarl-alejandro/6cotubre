'use strict'

const gulp = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const hbsfy = require('browserify-handlebars')

gulp.task('build', function(){
  return browserify({
    entries:'./public/app/scripts/app',
    transform: [hbsfy]
  })
    .transform([babelify, hbsfy])
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/dist/js'))
})

gulp.task('default', ['build'])
