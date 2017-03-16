var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('html', function() {
    var targetFiles = 'src/**/*.html';
    return gulp.src(targetFiles)
            .pipe(watch(targetFiles))
            .pipe(gulp.dest('.tmp/src'));
})

gulp.task('css', function() {
    var targetFiles = 'src/**/*.css';
    return gulp.src(targetFiles)
            .pipe(watch(targetFiles))
            .pipe(gulp.dest('.tmp/src'));
})

gulp.task('systemjs', function() {
    return gulp.src('src/systemjs.config.js').pipe(gulp.dest('.tmp/src'));
});

gulp.task('default', ['html', 'css', 'systemjs']);