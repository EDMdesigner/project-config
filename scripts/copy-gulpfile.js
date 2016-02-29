#!/usr/bin/env node

var fs = require("fs-extra");

process.chdir("./");

try {
	fs.copy("/gulpfile.js", process.cwd() + "/gulpfile.js");
} catch (err) {
	console.error("Error: " + err.message);
}
