var del = require('del');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rs = require('run-sequence');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

const buildDir = "./build";

gulp.task('build', function() {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new plugins.util.PluginError("webpack", err);
    plugins.util.log("[webpack]", "Emitted output file successfully");
  });
});

gulp.task('clean', function() {
  return del(`${buildDir}/**/*`);
});

gulp.task('copy', function() {
  gulp.src('./index.html')
    .pipe(gulp.dest(buildDir));
});

gulp.task('default', function() {
  rs(
    'clean',
    'copy',
    'build',
    'watch'
  );
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.ts*', './src/**/*.less'], ['build']);
  gulp.watch('./index.html', ['copy']);
});
