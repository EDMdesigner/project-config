var fs = require("fs-extra");

module.exports = function hooksCopy() {

	process.chdir("./");
	process.cwd();

	try {
		fs.copySync(__dirname + "/hooks", process.env.PWD + "/.git/hooks");
	} catch (err) {
		console.error("Error: " + err.message);
	}
}