// Run the shell command python build.py

var { exec } = require("child_process");
var fs = require("fs");
var path = require("path");

// Download the assets
exec("node downloader dist", (err, stdout, stderr) => {
	console.log(stdout);
	if (err) console.error(err);
});

// Copy the following files into the "dist" folder
const outputFiles = ["index.html", "app.js"];
if (!fs.existsSync("dist")) fs.mkdirSync("dist");
outputFiles.forEach((file) => fs.copyFileSync(file, path.join("dist", file)));
console.log("Copied files to dist folder");

// Build the CSS File
exec("npx tailwindcss -i app.css -o dist/app.min.css -m", (err, stdout, stderr) => {
	console.log(stdout);
	if (err) console.error(err);
});
