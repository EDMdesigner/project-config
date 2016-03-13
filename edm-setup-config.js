#!/usr/bin/env node

var fs			= require("fs"),
	path 		= require("path"),
	exec		= require("child_process").exec,
	nconf		= require("nconf"),
	dotfile 	= require("./scripts/copy-dotfiles"),
	gitHooks 	= require("./scripts/copy-git-hooks"),
	gulpfile 	= require("./scripts/copy-gulpfile"),
	program 	= require("commander"),
	pjson = require('./package.json');

process.chdir(__dirname);
var configFile = process.cwd() + "/config.json";

if (!fs.existsSync(configFile)) {
	return console.log("Config file does not exist!");
}

nconf.file({file: configFile});

var cmd = nconf.get("commands");

var dotfiles = cmd.dotfiles;
var hooks = cmd.hooks;
var gulp = cmd.gulp;

program
	.version(pjson.version)
	.option("-d, --dotfiles", "Copy dotfiles project root")
	.option("-g, --hooks", "Copy git hooks")
	.option("-t, --task", "Copy task runner file")
	.parse(process.argv);

process.chdir("./");

if (program.dotfiles)dotfile();
if (program.hooks)gitHooks();
if (program.task)gulpfile();