"use strict";

global.$ = {
  config: require('./gulp/config.js'),
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  argv: require('yargs').argv,
  del: require('del'),
  uglify: require('gulp-uglify-es').default,
  bowerFiles: require('main-bower-files')
};

$.path.task.forEach(function(task) {
  require(task)();
});


$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel('pug', 'sass', 'js', 'copy:image', 'copy:fonts', 'copy:bowerFiles'),
  'inject',
  $.gulp.parallel('watcher', 'serve')
));

