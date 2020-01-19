module.exports = function() {
    //----------#BUILD FOLDER
    //html file build version
    $.gulp.task('html:build', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.html)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.rigger())
            .pipe($.gulp.dest($.pathObject.pathVar.path.build.html))
            .on('end', $.gp.browserSync.reload);
    });

    $.gulp.task('pageList:build', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.pageList)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.rigger())
            .pipe($.gulp.dest($.pathObject.pathVar.path.build.pageList))
            .on('end', $.gp.browserSync.reload);
    });

    //----------#HTML FOLDER
    //html file html version
    $.gulp.task('pageList:buildHtml', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.html)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.rigger())
            .pipe($.gp.gulpRemoveHtml())
            .pipe($.gulp.dest($.pathObject.pathVar.path.html.html))
            .on('end', $.gp.browserSync.reload);
    });

    $.gulp.task('html:buildHtml', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.pageList)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.rigger())
            .pipe($.gp.gulpRemoveHtml())
            .pipe($.gulp.dest($.pathObject.pathVar.path.html.pageList))
            .on('end', $.gp.browserSync.reload);
    });
};