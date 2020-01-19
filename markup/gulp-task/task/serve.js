module.exports = function() {
    //----------#BUILD FOLDER
    //config webserver for browserSync build
    var config = {
        server: {
            baseDir: $.pathObject.pathVar.path.build.serve,
            index: $.pathObject.pathVar.path.build.serveIndex,
            reloadDelay: 300,
        },
        tunnel: false,
        host: 'localhost',
        port: 666,
        logPrefix: "Build folder"
    };
    // task webserver for browserSync  build
    $.gulp.task('webserver', function() {
        return $.gp.browserSync(config);
    });

    //----------#HTML FOLDER
    //config webserver for browserSync html
    var configHtml = {
        server: {
            baseDir: $.pathObject.pathVar.path.html.serve,
            index: $.pathObject.pathVar.path.html.serveIndex,
            reloadDelay: 300,
        },
        tunnel: false,
        host: 'localhost',
        port: 999,
        logPrefix: "Html folder"
    };
    // task webserver for browserSync ntml
    $.gulp.task('webserverHtml', function() {
        return $.gp.browserSync(configHtml);
    });
};