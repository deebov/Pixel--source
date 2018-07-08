module.exports = function () {
  $.gulp.task('sass', function(){
    return $.gulp.src(`./${$.config.srcDir}/style/*.sass`)
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({
        title: 'Sass',
        message: "Error: <%= error.message %>"
      }))
      .pipe($.gp.autoprefixer({
        browsers: ['> 5%'],
        cascade: false
      }))
      .pipe($.gp.cssUnit({
        type: 'px-to-rem',
        rootSize: 16
      }))
      .pipe($.gp.csso())
      .pipe($.gulp.dest(`./${$.config.root}/assets/css`))
      .pipe($.browserSync.stream());
  });
};