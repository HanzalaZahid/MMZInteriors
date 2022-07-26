var gulp = require('gulp');
// var images_src = './assets/uploads';
var sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync').create();

function sass_sub(callback) {
    return gulp.src('sass/**/*.+(scss|sass)')
      .pipe(sass()) // Using gulp-sass
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest('assets/css/'))
      .pipe(cleanCSS())
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('assets/css/'))
      .pipe(browserSync.stream())
      callback();
}

function sass_main(callback) {
    return gulp.src('sass/*.+(scss|sass)')
      .pipe(sass()) // Using gulp-sass
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest('assets/css/'))
      .pipe(cleanCSS())
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('assets/css/'))
      .pipe(browserSync.stream());
      callback();
}

function sync(callback) {
    return browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    callback();
}

function clean_css(callback) {
    return gulp.src('./assets/css/*.css')
      .pipe(cleanCSS())
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('assets/css/'));
      callback();
  }



function watch() {
    gulp.watch("sass/**/*.+(scss|sass)", sass_sub);
    gulp.watch("sass/*.+(scss|sass)", sass_main);
    // gulp.watch('./assets/css/*.css').on('change', clean_css);
    gulp.watch("./*.*").on('change', browserSync.reload);
}

gulp.task('sass_sub', sass_sub);
gulp.task('sass_main', sass_main);
gulp.task('browser_sync', sync);
// gulp.task('minify-css', clean_css);
gulp.task('watch', gulp.parallel(sass_sub, sass_main, sync, watch))