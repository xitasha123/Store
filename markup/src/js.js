module.exports = function () {
  // ----------#BUILD FOLDER
  // js file build version project
  $.gulp.task('js:build', function () {
    return $.gulp.src($.pathObject.pathVar.path.src.js)
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError('Error: <%= error.message %>') }))
      .pipe($.gp.newer($.pathObject.pathVar.path.build.js))
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.babel({
        presets: ['env'],
      }))
      .pipe($.gp.rigger())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.pathObject.pathVar.path.build.js))
      .pipe($.gp.browserSync.reload({ stream: true }));
  });

  $.gulp.task('jsPages:build', function () {
    return $.gulp.src($.pathObject.pathVar.path.src.jsPages)
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError('Error: <%= error.message %>') }))
      .pipe($.gp.newer($.pathObject.pathVar.path.build.jsPages))
      // .pipe($.gp.eslint())
      // .pipe($.gp.eslint.format())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.babel({
        presets: ['env'],
      }))
      .pipe($.gp.rigger())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.pathObject.pathVar.path.build.jsPages))
      .pipe($.gp.browserSync.reload({ stream: true }));
  });

  $.gulp.task('jsLibs:build', function () {
    return $.gulp.src($.pathObject.pathVar.path.src.jsLibs)
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError('Error: <%= error.message %>') }))
      .pipe($.gp.newer($.pathObject.pathVar.path.build.js))
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.babel({
        presets: ['env'],
      }))
      .pipe($.gp.rigger())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.pathObject.pathVar.path.build.js))
      .pipe($.gp.browserSync.reload({ stream: true }));
  });

  // ----------#HTML FOLDER
  // js file html version project
  $.gulp.task('js:buildHtml', function () {
    return $.gulp.src($.pathObject.pathVar.path.src.js)
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError('Error: <%= error.message %>') }))
      .pipe($.gp.newer($.pathObject.pathVar.path.html.js))
      // .pipe($.gp.eslint())
      // .pipe($.gp.eslint.format())
      .pipe($.gp.babel({
        presets: ['env'],
      }))
      .pipe($.gp.rigger())
      .pipe($.gp.uglify())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.pathObject.pathVar.path.html.js))
      .pipe($.gp.browserSync.reload({ stream: true }));
  });

  $.gulp.task('jsPages:buildHtml', function () {
    return $.gulp.src($.pathObject.pathVar.path.src.jsPages)
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError('Error: <%= error.message %>') }))
      .pipe($.gp.newer($.pathObject.pathVar.path.html.jsPages))
      // .pipe($.gp.eslint())
      // .pipe($.gp.eslint.format())
      .pipe($.gp.babel({
        presets: ['env'],
      }))
      .pipe($.gp.rigger())
      .pipe($.gp.uglify())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.pathObject.pathVar.path.html.jsPages))
      .pipe($.gp.browserSync.reload({ stream: true }));
  });

  $.gulp.task('jsLibs:buildHtml', function () {
    return $.gulp.src($.pathObject.pathVar.path.src.jsLibs)
      .pipe($.gp.newer($.pathObject.pathVar.path.html.js))
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError('Error: <%= error.message %>') }))
      // .pipe($.gp.eslint())
      // .pipe($.gp.eslint.format())
      .pipe($.gp.babel({
        presets: ['env'],
      }))
      .pipe($.gp.rigger())
      .pipe($.gp.uglify())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.pathObject.pathVar.path.html.js))
      .pipe($.gp.browserSync.reload({ stream: true }));
  });
};

/**
 * Inline ESLint configuration
 * @returns {stream} gulp file stream
 */
$.gulp.task('inline-configs:build', () => {
  return $.gulp.src($.pathObject.pathVar.path.src.jsPages)
    // .pipe($.gp.eslint())
    // .pipe($.gp.eslint.format());
});

/**
 * Load configuration file
 * @returns {stream} gulp file stream
 */
$.gulp.task('load-configs:build', () => {
  return $.gulp.src($.pathObject.pathVar.path.src.jsPages)
    // .pipe($.gp.eslint())
    // .pipe($.gp.eslint.format());
});

/**
 * Shorthand way to load a configuration file
 * @returns {stream} gulp file stream
 */
$.gulp.task('load-config-shorthands:build', () => {
  return $.gulp.src($.pathObject.pathVar.path.src.jsPages)
    // .pipe($.gp.eslint())
    // .pipe($.gp.eslint.format());
});


/**
 * Inline ESLint configuration
 * @returns {stream} gulp file stream
 */
$.gulp.task('inline-configs:buildHtml', () => {
  return $.gulp.src($.pathObject.pathVar.path.src.jsPages)
    // .pipe($.gp.eslint())
    // .pipe($.gp.eslint.format());
});

/**
 * Load configuration file
 * @returns {stream} gulp file stream
 */
$.gulp.task('load-configs:buildHtml', () => {
  return $.gulp.src($.pathObject.pathVar.path.src.jsPages)
    // .pipe($.gp.eslint())
    // .pipe($.gp.eslint.format());
});

/**
 * Shorthand way to load a configuration file
 * @returns {stream} gulp file stream
 */
$.gulp.task('load-config-shorthands:buildHtml', () => {
  return $.gulp.src($.pathObject.pathVar.path.src.jsPages)

  // Load a specific ESLint config
    // .pipe($.gp.eslint())
    // .pipe($.gp.eslint.format());
});
