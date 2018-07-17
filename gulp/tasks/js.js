module.exports = function () {
  $.gulp.task('js', function(){
    return $.gulp.src(`./${$.config.srcDir}/js/*.js`)
      .pipe($.uglify())
      .pipe($.gulp.dest(`./${$.config.root}/assets/js`));
  });
};