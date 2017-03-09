var gulp = require('gulp');

gulp.task('html', function() {
    return gulp.src('src/**/*.html').pipe(gulp.dest('.tmp/src'));
})

gulp.task('css', function() {
    return gulp.src('src/**/*.css').pipe(gulp.dest('.tmp/src'));
})

gulp.task('systemjs', function() {
    return gulp.src('src/systemjs.config.js').pipe(gulp.dest('.tmp/src'));
});

gulp.task('default', ['html', 'css', 'systemjs']);