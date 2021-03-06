var fs = require("fs-extra");

module.exports = function packageCopy() {

	process.chdir("./");
	process.cwd();

	try {
		fs.copySync(__dirname + "/package.json", process.env.PWD + "/package.json");
	} catch (err) {
		console.error("Error: " + err.message);
	}

	console.log("===============================================================");
	console.log("package.json copied: ", process.env.PWD + "/package.json");
};
