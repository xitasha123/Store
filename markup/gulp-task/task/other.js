module.exports = function() {
    //----------#BUILD FOLDER
    //delet folder build version project
    $.gulp.task('clean', function() {
        return $.gp.del.sync($.pathObject.pathVar.path.clean, {force: true});
    });

    //clearcache all build version project
    $.gulp.task('cleancache', function() {
        return $.gp.cache.clearAll();
    });

    //fonts file build version project
    $.gulp.task('fonts:build', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.fonts)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gulp.dest($.pathObject.pathVar.path.build.fonts))
    });

    //vendors file build version project
    $.gulp.task('vendors:build', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.vendors)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gulp.dest($.pathObject.pathVar.path.build.vendors))
    });

    //----------#HTML FOLDER
    //delet folder html version project
    $.gulp.task('cleanHtml', function() {
        return $.gp.del.sync($.pathObject.pathVar.path.cleanHtml, {force: true});
    });

    //fonts file html version project
    $.gulp.task('fonts:buildHtml', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.fonts)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gulp.dest($.pathObject.pathVar.path.html.fonts))
    });

    //vendors file html version project
    $.gulp.task('vendors:buildHtml', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.vendors)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gulp.dest($.pathObject.pathVar.path.html.vendors))
    });

};