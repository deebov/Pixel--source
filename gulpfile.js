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
  bowerFiles: require('main-bower-files')
};

$.path.task.forEach(function(task) {
  require(task)();
});


$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel('pug', 'sass', 'copy:image', 'copy:fonts'),
  'inject',
  $.gulp.parallel('watcher', 'serve')
));

