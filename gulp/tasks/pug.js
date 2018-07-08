module.exports = function () {
  $.gulp.task('pug', function(){
    const locals = require(`../../${$.config.srcDir}/pug/helpers/content.json`);
    return $.gulp.src(`./${$.config.srcDir}/pug/*.pug`)
      .pipe($.gp.pug({
        pretty: true,
        locals: locals
      }))
      .on('error', $.gp.notify.onError({
        title: 'Pug',
        message: "Error: <%= error.message %>"
      }))
      .pipe($.gulp.dest(`./${$.config.root}/`));
  });
};
