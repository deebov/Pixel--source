module.exports = function () {
  $.gulp.task('watcher', function () {
    $.gulp.watch(`./${$.config.srcDir}/pug/**/*.pug`, $.gulp.series('pug', 'inject'));
    $.gulp.watch(`./${$.config.srcDir}/style/**/*.sass`, $.gulp.series('sass'));
    $.gulp.watch(`./${$.config.root}`).on('change', $.browserSync.reload);
  });
};