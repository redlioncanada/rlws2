var gulp = require('gulp'),
	flatten = require('gulp-flatten')

gulp.task('images', function() {
	gulp.src('./app/assets/images/**/*')
		.pipe(gulp.dest('./dist/images'))
})

gulp.task('json', function() {
	gulp.src('./app/js/**/*.json')
		.pipe(flatten())
		.pipe(gulp.dest('./dist/json'))
})

gulp.task('once', ['images', 'json'], function() {})

gulp.task('default', ['once'], function() {
	gulp.watch('./app/assets/images/**/*', ['images'])
	gulp.watch('./app/js/**/*.json', ['json'])
})