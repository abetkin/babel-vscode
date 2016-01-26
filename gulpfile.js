var gulp = require('gulp');

gulp.task('default', function() {
    var babel = require('gulp-babel'),
        sourcemaps = require('gulp-sourcemaps'),
        relativeSourcemapsSource = require('gulp-relative-sourcemaps-source');
    return gulp.src(['test/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(relativeSourcemapsSource({dest: 'build'}))
    .pipe(sourcemaps.write('.', {
        includeContent: false,
        // sourceRoot: '.'
    }))
    .pipe(gulp.dest('build'));
});



