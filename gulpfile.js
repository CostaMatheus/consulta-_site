const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function compilaSass() {
  return gulp
  .src('scss/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade:false
  }))
  .pipe(gulp.dest('css/'))
}

gulp.task('sass', compilaSass);

function gulpWatch() {
  gulp.watch('scss/*.scss', compilaSass);
}

gulp.task('default', gulpWatch)