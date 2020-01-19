module.exports = function() {
    //----------#BUILD FOLDER
    //main css build version project
    $.gulp.task('css:build', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.style)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.newer($.pathObject.pathVar.path.build.css))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.rename({suffix: '.min'}))
            .pipe($.gulp.dest($.pathObject.pathVar.path.build.css))
            .pipe($.gp.browserSync.stream());
    });

    $.gulp.task('cssPages:build', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.stylePages)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.newer($.pathObject.pathVar.path.build.cssPages))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.rename({suffix: '.min'}))
            .pipe($.gulp.dest($.pathObject.pathVar.path.build.cssPages))
            .pipe($.gp.browserSync.stream());
    });

    //----------#HTML FOLDER
    //main css html version project
    $.gulp.task('css:buildHtml', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.style)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.newer($.pathObject.pathVar.path.html.css))
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 16 versions'],
                cascade: false
            }))
            .pipe($.gp.gcmq())
            .pipe($.gp.csso())
            .pipe($.gp.rename({suffix: '.min'}))
            .pipe($.gulp.dest($.pathObject.pathVar.path.html.css))
            .pipe($.gp.browserSync.stream());
    });

    //main css html version project
    $.gulp.task('cssPages:buildHtml', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.stylePages)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.newer($.pathObject.pathVar.path.html.cssPages))
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 16 versions'],
                cascade: false
            }))
            .pipe($.gp.gcmq())
            .pipe($.gp.csso())
            .pipe($.gp.rename({suffix: '.min'}))
            .pipe($.gulp.dest($.pathObject.pathVar.path.html.cssPages))
            .pipe($.gp.browserSync.stream());
    });
};