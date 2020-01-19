module.exports = function() {
	$.gulp.task('pug:build', function() {
		return $.gulp.src($.pathObject.pathVar.path.src.pug)
			.pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
			.pipe($.gp.changed($.pathObject.pathVar.path.build.pug, {extension: '.html'}))
			.pipe($.gp.pug({
				pretty: true
			}))
			.pipe($.gulp.dest($.pathObject.pathVar.path.build.pug))
			.pipe($.gp.browserSync.reload({ stream: true }));
	});

	$.gulp.task('pageList:build', function() {
		return $.gulp.src($.pathObject.pathVar.path.src.pageList)
			.pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
			.pipe($.gp.changed($.pathObject.pathVar.path.build.pageList, {extension: '.html'}))
			.pipe($.gp.pug({
				pretty: true
			}))
			.pipe($.gulp.dest($.pathObject.pathVar.path.build.pageList))
			.pipe($.gp.browserSync.reload({ stream: true }));
	});

	//----------#HTML FOLDER
	$.gulp.task('pug:buildHtml', function() {
		return $.gulp.src($.pathObject.pathVar.path.src.pug)
			.pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
			.pipe($.gp.pug())
			.pipe($.gp.gulpRemoveHtml())
			.pipe($.gp.htmlbeautify({
				indentSize: 2,
				unformatted: [
					// https://www.w3.org/TR/html5/dom.html#phrasing-content
					'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
					'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
					'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
					'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
					'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
				]
			}))
			.pipe($.gulp.dest($.pathObject.pathVar.path.html.pug))
			.on('end', $.gp.browserSync.reload);
	});

	$.gulp.task('pageList:buildHtml', function() {
		return $.gulp.src($.pathObject.pathVar.path.src.pageList)
			.pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
			.pipe($.gp.pug())
			.pipe($.gp.gulpRemoveHtml())
			.pipe($.gp.htmlbeautify({
				indentSize: 2,
				unformatted: [
					// https://www.w3.org/TR/html5/dom.html#phrasing-content
					'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
					'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
					'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
					'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
					'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
				]
			}))
			.pipe($.gulp.dest($.pathObject.pathVar.path.html.pageList))
			.on('end', $.gp.browserSync.reload);
	});
};