var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemap = require('gulp-sourcemaps')
var livereload = require('gulp-livereload')

gulp.task('compile', function(done) {
    return gulp.src('styles.scss')
        .pipe(scss)
        .pipe(gulp.dest('.'))
    done()
})

gulp.task('compileAndDoSourceMaps', function(done) {
    return gulp.src('styles.scss')
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(sourcemap.write())
        .pipe(gulp.dest('.'))
        .pipe(livereload())
    done()
})

gulp.task('sass:watch', function(done) {
    livereload.listen()
    gulp.watch('styles.scss', gulp.series('compileAndDoSourceMaps'))
    done()
})