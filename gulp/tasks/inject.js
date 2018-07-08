module.exports = function () {
  $.gulp.task('inject', function(done){
    const sources = $.gulp.src([`./${$.config.root}/assets/libs/*.js`, `./${$.config.root}/assets/libs/*.css`, `./${$.config.root}/assets/js/*.js`, `./${$.config.root}/assets/css/*.css`], {read: false});
    return $.gulp.src(`./${$.config.root}/*.html`)
      .pipe($.gp.inject(sources, {
        removeTags: true,
        relative: true
      }))
      .pipe($.gulp.dest(`./${$.config.root}/`))
  });
};
