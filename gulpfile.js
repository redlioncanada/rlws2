var gulp = require('gulp')

gulp.task('images', function() {
	gulp.src('./app/assets/images/**/*')
		.pipe(gulp.dest('./dist/images'))
})

gulp.task('once', ['images'], function() {})

gulp.task('default', ['images'], function() {
	gulp.watch('./app/assets/images/**/*', ['images'])
})