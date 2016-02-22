#!/usr/bin/env node

var fs = require("fs-extra");

process.chdir("./");
try {
	fs.copySync(__dirname + "/hooks", process.cwd() + "/.git/hooks");
} catch (err) {
	console.error("Error: " + err.message);
}

try {
	fs.copySync(__dirname + "/dotfiles", process.cwd() + "/");
} catch (err) {
	console.error("Error: " + err.message);
}
