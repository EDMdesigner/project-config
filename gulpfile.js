var gulp = require("gulp");
var jscs = require("gulp-jscs");
var jshint = require("gulp-jshint");
var stylish = require("gulp-jscs-stylish");
var jsonlint = require("gulp-jsonlint");

var jsFiles = [
	"./**/*.js",
	"!node_modules/**/*",
	"!./**/*.built.js"
];

var jsonFiles = [
	"src/featureConfigDefaults/**/*.json",
	"package.json",
	".jshintrc",
	".jscsrc",
	"src/modules/**/*.json"
];

// JSON lint
// ==================================================
gulp.task("jsonlint", function() {
	return gulp.src(jsonFiles)
		.pipe(jsonlint())
		.pipe(jsonlint.failOnError());
});


// JS Hint
// ==================================================
gulp.task("jshint", function() {
	return gulp.src(jsFiles)
		.pipe(jshint(".jshintrc"))
		.pipe(jshint.reporter("jshint-stylish"));
});


// JS CodeStyle
// ==================================================
gulp.task("jscs", function() {
	return gulp.src(jsFiles)
		.pipe(jscs({
			configPath: ".jscsrc",
			fix: true
		}))
		.pipe(gulp.dest("./"))
		.pipe(stylish());
});

gulp.task("test", ["jsonlint", "jshint", "jscs"]);
