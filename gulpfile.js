var gulp = require('gulp');

gulp.task('html', function buildHTML() {
	return gulp.src('./src/*.html').pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {

});
