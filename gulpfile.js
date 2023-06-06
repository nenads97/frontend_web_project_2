var gulp = require('gulp');
var scss = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sassLint = require('gulp-sass-lint');
var consolidate = require('gulp-consolidate');
var iconfont = require('gulp-iconfont');
var browserSync = require('browser-sync').create();

// Tasks:
// 1. Scss to CSS
// 2. Scss LINT - pravila
// 3. ICONFONT - ikonice u font
// 4. COPYFILES - kopiranje u dist

// 1. Task - scss to css kompajliranje (vise ne koristimo koalu)

gulp.task('scss', function () {
    return gulp.src('src/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(postcss([autoprefixer('last 2 versions')]))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/css'))
        .on('error', function (err) { console.log(err.message); })
});


// 2. Task -  scss lint 
gulp.task('scss-lint', function () {
    return gulp.src('src/scss/**/*.s+(a|c)ss')
        .pipe(sassLint({
            configFile: '.scss-lint.yml'
        }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(sassLint.format())
        .on('error', function (err) { console.log(err.message); })
        .pipe(sassLint.failOnError())
        .on('error', function (err) { console.log(err.message); })
});


// 3. Task - iconfont 
var iconConfig = {
    fontName: 'iconfont',
    formats: ['woff', 'woff2'],
    appendCodepoints: true,
    appendUnicode: false,
    normalize: true,
    fontHeight: 1000,
    centerHorizontally: true
};

gulp.task('iconfont', function () {
    return gulp.src('src/images/svg/*.svg')
        .pipe(iconfont(iconConfig))
        .on('glyphs', function (glyphs, options) {
            gulp.src('src/scss/config/iconfont-template/_iconfont.scss')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName,
                    fontDate: new Date().getTime()
                }))
                .pipe(gulp.dest('src/scss/config'));
        })
        .pipe(gulp.dest('dist/fonts'));
});


// 4. Task - copy
gulp.task('copy-html', function () {
    return gulp.src('*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('copy-js', function () {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-img', function () {
    return gulp.src('src/images/**/*.{png,svg,jpg,jpeg}')
        .pipe(gulp.dest('dist/images'))
});

gulp.task('copy-font', function () {
    return gulp.src('src/fonts/*.{woff,woff2}')
        .pipe(gulp.dest('dist/fonts'))
});


// Static Server + watching scss/html files
gulp.task('serve', ['scss'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/scss/*.scss", ['scss']);
    gulp.watch("*.html").on('change', browserSync.reload);
});


// Task Build   
gulp.task('build', ['copy-html', 'copy-font', 'copy-js', 'copy-img', 'iconfont', 'scss', 'scss-lint']);


// Task Watch
gulp.task('default', ['scss', 'scss-lint'], function () {
    gulp.watch('src/**/*.scss', ['scss', 'scss-lint']);
    gulp.watch('*.html', ['copy-html']);
    gulp.watch('src/**/*.js', ['copy-js']);
});
