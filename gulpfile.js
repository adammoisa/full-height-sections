var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var banner = require('gulp-banner');
var sourcemaps = require('gulp-sourcemaps');
var pkg = require('./package.json');

var comment = '/*\n' +
	' * <%= pkg.name %> <%= pkg.version %>\n' +
	' * <%= pkg.description %>\n' +
	' * <%= pkg.homepage %>\n' +
	' *\n' +
	' * Copyright (C) 2017 - A project by <%= pkg.author %>\n' +
	' * Released under the <%= pkg.license %> license.\n' +
	'*/\n\n';

gulp.task('js', function() {
	gulp.src('./fullHeight.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify({}))
		.pipe(rename({suffix: '.min'}))
		.pipe(banner(comment, {
			pkg: pkg
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js'], function(){
	//watch js
	gulp.watch("./fullHeight.js", ['js']);
});