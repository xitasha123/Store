module.exports = function() {
    //sprite
    $.gulp.task('sprite', function generateSpritesheets() {
        var spriteData = $.gulp.src($.pathObject.pathVar.path.src.spriteOrigin)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.newer($.pathObject.pathVar.path.src.spriteImgPath))
            .pipe($.gp.newer($.pathObject.pathVar.path.src.spriteSass))
            .pipe($.gp.spritesmith({
                // ------ to support the retina uncommented bottom line (add images twice larger and prefiks ...@2x.png)
                //retinaSrcFilter: [$.pathObject.pathVar.path.src.spriteretinaSrcFilter],
                //retinaImgName: $.pathObject.pathVar.path.src.spriteimgNameRet,
                imgName: $.pathObject.pathVar.path.src.spriteimgName,
                cssName: 'sprite.scss',
                algorithm: 'binary-tree',
                padding: 5,
            }));
        return spriteData.img.pipe($.gulp.dest($.pathObject.pathVar.path.src.spriteImgPath));
        return spriteData.css.pipe($.gulp.dest($.pathObject.pathVar.path.src.spriteSass));
    });


    //----------#BUILD FOLDER
    //image optimize build version project
    $.gulp.task('image:build', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.img)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.newer($.pathObject.pathVar.path.build.img))
            .pipe($.gp.cache($.gp.imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                use: $.gp.pngquant(),
                interlaced: true
            })))
            .pipe($.gulp.dest($.pathObject.pathVar.path.build.img))
            .pipe($.gp.browserSync.reload({ stream: true }));
    });

    $.gulp.task('images:build', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.images)
            .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
            .pipe($.gp.newer($.pathObject.pathVar.path.build.images))
            .pipe($.gp.cache($.gp.imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                use: $.gp.pngquant(),
                interlaced: true
            })))
            .pipe($.gulp.dest($.pathObject.pathVar.path.build.images))
            .pipe($.gp.browserSync.reload({ stream: true }));
    });

    //----------#HTML FOLDER
    //image optimize html version project
    $.gulp.task('image:buildHtml', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.img)
            .pipe($.gp.newer($.pathObject.pathVar.path.html.img))
            .pipe($.gp.tingpng())
            .pipe($.gulp.dest($.pathObject.pathVar.path.html.img))
            .pipe($.gp.browserSync.reload({ stream: true }));
    });
    $.gulp.task('images:buildHtml', function() {
        return $.gulp.src($.pathObject.pathVar.path.src.images)
            .pipe($.gp.newer($.pathObject.pathVar.path.html.images))
            .pipe($.gp.tingpng())
            .pipe($.gulp.dest($.pathObject.pathVar.path.html.images))
            .pipe($.gp.browserSync.reload({ stream: true }));
    });
};