module.exports = function() {
  $.gulp.task('copy:bowerFiles', function() {
    return $.gulp.src($.bowerFiles(), { since: $.gulp.lastRun('copy:bowerFiles') })
      .pipe($.gulp.dest(`./${$.config.root}/assets/libs`));
  });
};