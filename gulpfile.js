var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    glob = require('glob'),
    es = require('event-stream'),
    less = require('gulp-less'),
    path = require('path');
var counter_js = 0;

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
    counter_js +=1;
    console.log(`js编译完成，编译统计数${counter_js}`);
});

gulp.task('less', function (cb) {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            paths: [path.join(__dirname,'less','includes')]
        }))
        .pipe(gulp.dest('./public/css'));
})

gulp.task('watch', function () {
    var js_watcher = gulp.watch(['./test/*.js', './src/js/*.js'], ['js']);
    var less_watcher = gulp.watch(['./src/less/*.less'],['less']);
    js_watcher.on('error',(e)=>{
        console.log('some error has throw');
        console.log(e);
    })

});

gulp.task('default', ['js','less']);
