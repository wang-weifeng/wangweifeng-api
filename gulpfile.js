var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var size = require('gulp-size');
var del = require('del');

var paths = {
    scripts: ['static/js/*.js', '!static/js/lib/*.js'],
    concat_scripts: ['static/js/3rd-libs/*.js'],
    css: ['static/css/*.css', '!static/css/lib/*.css'],
    img:['static/img/*']
};

gulp.task('clean', function () {
    console.log("del build files");
    return del(['static/build/js/*','static/build/css/*']);
});

gulp.task('jshint', function () {
    return gulp.src(paths.scripts)
        .pipe(jshint());
});

gulp.task('build:js', function () {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest('static/build/js'))
        .pipe(size({title: 'js minified'}));
});

gulp.task('build:concat_js', function () {
    return gulp.src(paths.concat_scripts)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('static/build/js/3rd-libs'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('static/build/js/3rd-libs'))
        .pipe(size({title: 'js concat minified'}));
});

gulp.task('build:css', function () {
    gulp.src(paths.css)
        .pipe(minifycss()) // 压缩css文件
        .pipe(gulp.dest('static/build/css'))
        .pipe(size({title: 'css minified'}));
});

gulp.task('build:img', function () {
    gulp.src(paths.img)
        .pipe(gulp.dest('static/build/img'))
        .pipe(size({title: 'img minified'}));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['build:js']);
    gulp.watch(paths.css, ['build:css']);
    gulp.watch(paths.img, ['build:img']);
});

//,'jshint','watch', 'build:js', 'build:css'
gulp.task('default', ['clean','jshint','watch', 'build:js', 'build:concat_js','build:css','build:img']);