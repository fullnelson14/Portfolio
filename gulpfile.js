var gulp = require('gulp');

gulp.task('html', function buildHTML() {
	return gulp.src('./app/src/*.html').pipe(gulp.dest('./app/dist'));
});

gulp.task('default', function() {

});
