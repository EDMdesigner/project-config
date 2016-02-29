#!/usr/bin/env node

var fs			= require("fs"),
	exec		= require("child_process").exec,
	nconf		= require("nconf"),
	program 	= require('commander');

var configFile = "config.json";



if (!fs.existsSync(configFile)) {
	return console.log("Config file does not exist!");
}

console.log(configFile, "hello");

nconf.file({file: configFile});

var cmd = nconf.get("commands");

var dotfiles = cmd.dotfiles;
var hooks = cmd.hooks;
var gulp = cmd.gulp;

program
	.version('0.0.1')
	.option('-d, --dotfiles', 'Copy dotfiles project root')
	.option('-h, --hooks', 'Copy git hooks')
	.option('-g, --gulp', 'Copy Gulpfile.js')
	.parse(process.argv);

if (program.dotfiles) exec('node ./scripts/copy-dotfiles.js', function(error, stdout, stderr) {
	console.log(stdout);
	if (error !== null) {
		console.log('exec error: ' + error);
	}
});

if (program.hooks) exec('node ./scripts/copy-git-hooks.js', function(error, stdout, stderr) {
	console.log(stdout);
	if (error !== null) {
		console.log('exec error: ' + error);
	}
});

if (program.gulp) exec('node ./scripts/copy-gulpfile.js', function(error, stdout, stderr) {
	console.log(stdout);
	if (error !== null) {
		console.log('exec error: ' + error);
	}
});