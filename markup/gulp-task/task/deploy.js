module.exports = function() {
    // task for deploy on html
    $.gulp.task('ftp-task', function() {
        var conn = $.gp.ftp.create({
            host: $.passObject.passVar.host,
            user: $.passObject.passVar.login,
            password: $.passObject.passVar.password,
        });
        $.gulp.src($.passObject.passVar.globsPath)
            .pipe(conn.newer($.passObject.passVar.newerFolder))
            .pipe(conn.dest($.passObject.passVar.path));

    });
    // task for deploy on html wiht time out
    $.gulp.task('ftp', ['css:buildHtml'], function(cb) {
        setTimeout(function() {
            return $.gulp.start('ftp-task');
            cb();
            $.gp.notify("FTP file was UPLOAD!").write('');
        }, 2000);
    });

    // task for deploy on html js
    $.gulp.task('ftp-task-js', function() {
        var conn = $.gp.ftp.create({
            host: $.passObject.passVar.host,
            user: $.passObject.passVar.login,
            password: $.passObject.passVar.password,
        });
        $.gulp.src($.passObject.passVar.globsPathJs)
            .pipe(conn.newer($.passObject.passVar.newerFolderJs))
            .pipe(conn.dest($.passObject.passVar.pathJs));

    });
    // task for deploy on html wiht time out
    $.gulp.task('ftp-js', ['js:buildHtml'], function(cb) {
        setTimeout(function() {
            return $.gulp.start('ftp-task-js');
            cb();
            $.gp.notify("FTP JS file was UPLOAD!").write('');
        }, 2000);
    });
};