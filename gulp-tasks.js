var fs		= require("fs"),
	exec	= require("child_process").exec;

exec("echo '$(cat gulpfile.js)' >> test-gulpfile.js", function(err, stdout, stderr) {
	function exitOnError(err, stdout, stderr, msg) {
		if (err) {
			console.error(msg);
			console.log(stderr);
			process.exit();
		}
	}

	exitOnError(err, stdout, stderr, "failed!");

	console.log(stdout);
});