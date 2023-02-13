const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const fs = require("fs");

// Take a path value from the CLI arguments
const baseFolder = process.argv[2] || ".";

fetch("https://rewards.hypixel.net/claim-reward/app.js.map")
	.then((res) => res.json())
	.then((data) => {
		const { sources, sourcesContent } = data;

		const assetFileIndexes = sources.map((source, index) => source.endsWith(".png") && source.includes("webpack:///./src/client/component/Views/Rewards/Card/") && index).filter((a) => a !== false);

		const downloadPromises = assetFileIndexes.map((index) => {
			const source = sources[index].replace("webpack:///./src/client/component/Views/Rewards/Card/", `${baseFolder}/assets/`);
			fs.mkdirSync(source.replace(/\/[^/]*$/, ""), { recursive: true });
			const sourceContent = sourcesContent[index].replace('module.exports = __webpack_public_path__ + "', "https://rewards.hypixel.net/claim-reward/").slice(0, -2);
			return fetch(sourceContent)
				.then((res) => res.arrayBuffer())
				.then((bytes) => fs.writeFileSync(source, Buffer.from(bytes)))
				.then(() => console.log(`Downloaded ${source}`));
		});
		return Promise.all(downloadPromises);
	});
