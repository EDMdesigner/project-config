var fs = require("fs-extra");

module.exports = function gulpCopy() {

	process.chdir("./");
	process.cwd();

	try {
		fs.copySync(__dirname + "/gulpfile.js", process.env.PWD + "/gulpfile.js");
	} catch (err) {
		console.error("Error: " + err.message);
	}

	console.log("===============================================================");
	console.log("Gulpfile copied: ", process.env.PWD + "/gulpfile.js");
	console.log("\nRun following command: ");
	console.log("npm install --save-dev gulp gulp-jshint gulp-jsonlint gulp-jscs gulp-jscs-stylish jshint-stylish\n");
};
