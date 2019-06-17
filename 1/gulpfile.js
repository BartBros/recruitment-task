'use strict'

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps');

gulp.task('compileSass', (done) => {
    gulp.src('src/scss/main.scss')
       .pipe(maps.init())
       .pipe(sass().on('error', sass.logError))
       .pipe(maps.write('./'))
       .pipe(gulp.dest('css'));
   done();
});

gulp.task('watchSass', () => gulp.watch('src/scss/*.scss', gulp.parallel('compileSass')));