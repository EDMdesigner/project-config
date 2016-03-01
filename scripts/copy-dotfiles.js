var fs = require("fs-extra");

module.exports = function dotfilesCopy(){

	process.chdir("./");
	process.cwd();

	try {
		fs.copySync(__dirname + "/dotfiles", process.env.PWD + "/");
	} catch (err) {
		console.error("Error: " + err.message);
	}
}
