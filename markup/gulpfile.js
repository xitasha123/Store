'use strict';

global.$ = {
    gulp: require('gulp'),
    //gulp-load-plugins init
    gp: require('gulp-load-plugins') ({
        //need to work plugin - "del"
        pattern: ['*', '!gulp'],
        //need to work all this plugin
        rename: {
            'gulp-remove-html': 'gulpRemoveHtml',
            'gulp-group-css-media-queries': 'gcmq',
            'vinyl-ftp': 'ftp',
            'browser-sync': 'browserSync',
            'imagemin-pngquant': 'pngquant',
            'gulp-html-prettify': 'htmlbeautify',
            'gulp-tinypng-nokey': 'tingpng',
            'babel':'gulp-babel',
            'eslint':'gulp-eslint'
        },
    }),
    config: {
        configInit: require('./gulp-task/config/config.js'),
    },
    pathObject: {
        pathVar: require('./gulp-task/config/path-var.js'),
    },
    passObject: {
        passVar: require('./pass.js'),
    },
};

//CYCLE for all tasks
$.config.configInit.forEach(function (taskPath) {
    require(taskPath)();
});

//----------#BUILD FOLDER
//build task build folder TASK ---- gulp build
$.gulp.task('build', [
    'html:build',
    //'pug:build',
    'pageList:build',
    'js:build',
    'jsPages:build',
    'inline-configs:build',
    'load-configs:build',
    'load-config-shorthands:build',
    'cssPages:build',
    'css:build',
    'fonts:build',
    'vendors:build',
    'image:build',
    'images:build',
], () => {
	console.log('All tasks completed successfully.');
});


//task to all task build folder TASK ---- gulp
$.gulp.task('default', ['clean'], function () {
    $.gulp.start('build', 'jsLibs:build', 'watch', 'webserver');
});

//----------#HTML FOLDER
//build task html folder TASK ---- gulp buildHtml
$.gulp.task('buildHtml', [
    'html:buildHtml',
    //'pug:buildHtml',
    'pageList:buildHtml',
    'jsPages:buildHtml',
    'js:buildHtml',
    'inline-configs:buildHtml',
    'load-configs:buildHtml',
    'load-config-shorthands:buildHtml',
    'cssPages:buildHtml',
    'css:buildHtml',
    'fonts:buildHtml',
    'vendors:buildHtml',
    'image:buildHtml',
    'images:buildHtml',
], () => {
	console.log('All tasks completed successfully.');
});

//task to all task html folder TASK ---- gulp html
$.gulp.task('html', ['cleanHtml', 'sprite'], function () {
    $.gulp.start('cleancache', 'buildHtml', 'jsLibs:buildHtml', 'webserverHtml');
});

//---------#end