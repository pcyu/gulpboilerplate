let gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon')

gulp.task('js', function() {
  return gulp.src(['./public/index.js'])
  .pipe(livereload());
});

gulp.task('css', function () {
  return gulp.src('./public/style.css')
  .pipe(livereload());
});

gulp.task('html', function() {
  return gulp.src(['./public/index.html'])
  .pipe(livereload());
});

gulp.task('build', function() {
  livereload.listen();
  gulp.watch('./public/index.html', ['html']);
  gulp.watch('./public/index.js', ['js']);
  gulp.watch('./public/style.css', ['css']);
});

gulp.task('watch', ['build'], function() {
  return nodemon({
    script: 'server.js'
  });
});
