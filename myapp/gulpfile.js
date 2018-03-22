 var gulp = require('gulp');
 var sass = require('gulp-sass');

 gulp.task('sass', function() {
  return gulp.src('./public/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
});

gulp.task('watch', function() {
	gulp.watch('./public/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);