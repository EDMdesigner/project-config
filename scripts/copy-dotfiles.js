#!/usr/bin/env node

var fs = require("fs-extra");

process.chdir("./");

try {
	fs.copySync(__dirname + "/dotfiles", process.cwd() + "/");
} catch (err) {
	console.error("Error: " + err.message);
}
