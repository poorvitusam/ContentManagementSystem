var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
 return gulp.src('./src/assets/sass/style.scss')
   .pipe(sass())
   .pipe(gulp.dest('./src/assets/css'))
});

gulp.task('watch', function() {
   gulp.watch('./src/assets/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);