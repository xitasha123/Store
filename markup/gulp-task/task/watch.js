module.exports = function() {
	//----------#BUILD FOLDER
    // watch task with build 
    $.gulp.task('watch', function() {
        $.gp.notify("Watcher is START!").write('');
        $.gulp.watch([$.pathObject.pathVar.path.watch.vendors], ['vendors:build']).on('change', function() {
            $.gp.notify("VENDORS file was changed!").write('');
        });
        $.gulp.watch([$.pathObject.pathVar.path.watch.html, $.pathObject.pathVar.path.watch.pageList], ['html:build', 'pageList:build' ]).on('change', function() {
            $.gp.notify("html file was changed!").write('');
        });
        // $.gulp.watch([$.pathObject.pathVar.path.watch.pug, $.pathObject.pathVar.path.watch.pageList], ['pug:build','pageList:build']).on('change', function() {
        //     $.gp.notify("PUG file was changed!").write('');
        // });
        $.gulp.watch([$.pathObject.pathVar.path.watch.style], ['css:build']).on('change', function() {
            $.gp.notify("CSS file was changed!").write('');
        });
        $.gulp.watch([$.pathObject.pathVar.path.watch.style], ['cssPages:build']).on('change', function() {
            $.gp.notify("CSS file was changed!").write('');
        });
        $.gulp.watch([$.pathObject.pathVar.path.watch.js], ['js:build']).on('change', function() {
            $.gp.notify("JS file was changed!").write('');
        });
        $.gulp.watch([$.pathObject.pathVar.path.watch.jsPages], ['jsPages:build']).on('change', function() {
            $.gp.notify("JS file was changed!").write('');
        });
        $.gulp.watch([$.pathObject.pathVar.path.watch.jsLibs], ['jsLibs:build']).on('change', function() {
            $.gp.notify("JS-LIBS file was changed!").write('');
        });
        $.gulp.watch([$.pathObject.pathVar.path.watch.fonts], ['fonts:build']).on('change', function() {
            $.gp.notify("FONTS file was changed!").write('');
        });
        $.gulp.watch([$.pathObject.pathVar.path.watch.img, $.pathObject.pathVar.path.watch.images], ['image:build', 'images:build']).on('change', function() {
            $.gp.notify("IMG file was changed!").write('');
        });
    });
}