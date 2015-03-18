var gulp = require('gulp')
, browserify = require('browserify')
, concat = require('gulp-concat')
, reactify = require('reactify')
, source = require("vinyl-source-stream")
, less = require("gulp-less")
, path = require("path")
, livereload = require('gulp-livereload');
 
gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/js/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js'));
});
 
gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('less', function() {
    return gulp.src('src/less/main.less')
        .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});
 
gulp.task('default', ['browserify', 'copy', 'less'])
 
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/**/*.*', ['default']);
})