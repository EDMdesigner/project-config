var fs = require("fs-extra");

module.exports = function gulpCopy() {
	process.chdir("./");
	process.cwd();

	try {
		fs.copy(__dirname + "/gulpfile.js", process.env.PWD + "/gulpfile.js");
	} catch (err) {
		console.error("Error: " + err.message);
	}
}
