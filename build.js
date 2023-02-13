// Run the shell command python build.py

var exec = require("child_process").exec;
var fs = require("fs");
var path = require("path");

var child = exec("python build.py", function (error, stdout, stderr) {
	console.log(stdout);
	if (error !== null) console.error("exec error: " + error);
});

// Copy the following files into the "dist" folder:

const outputFiles = ["index.html", "app.js"];

// Create the "dist" folder if it doesn't exist
if (!fs.existsSync("dist")) fs.mkdirSync("dist");

outputFiles.forEach((file) => {
	fs.copyFileSync(file, path.join("dist", file));
});

exec("npx tailwindcss -i app.css -o dist/app.min.css -m");
