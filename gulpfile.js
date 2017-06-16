var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    glob = require('glob'),
    es = require('event-stream'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('js', function (cb) {
    glob('./test/*.js', function (err, files) {
        if (err) cb(err);
        var tasks = files.map(function (entry, index, arr) {
            return browserify({
                entries: [entry]
            }).transform("babelify", {presets: ["es2015", "react"]})
                .bundle()
                .pipe(source(entry.match(/[^\\/]+$/)[0]))
                .pipe(gulp.dest('./public/js'));
        });
        es.merge(tasks).on('end', cb);
    });
});

gulp.task('less', function (cb) {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            paths: [path.join(__dirname,'less','includes')]
        }))
        .pipe(gulp.dest('./public/css'));
})

gulp.task('watch', function () {
    gulp.watch(['./test/*.js', './src/js/*.js'], ['js']);
    gulp.watch(['./src/less/*.less'],['less']);
});

gulp.task('default', ['js','less']);
