# Get all the assets from the website
import requests
from pathlib import Path

request = requests.get("https://rewards.hypixel.net/claim-reward/app.js.map")
data = request.json()
sources = data["sources"]
sourceContent = data["sourcesContent"]

assetFileIndexes = [i for i, x in enumerate(sources) if x.endswith(".png") and "webpack:///./src/client/component/Views/Rewards/Card/" in x]

for index in assetFileIndexes:
	# Calculate the path and url
	downloadPath = sources[index].replace("webpack:///./src/client/component/Views/Rewards/Card/", "assets/")
	downloadUrl = sourceContent[index].replace('module.exports = __webpack_public_path__ + "', "https://rewards.hypixel.net/claim-reward/")[:-2]
	# Download the file
	resp = requests.get(downloadUrl)
	Path(downloadPath).parent.mkdir(parents=True, exist_ok=True)
	Path(downloadPath).write_bytes(resp.content)
	print(f"Downloaded {downloadPath.replace('assets/', '')} from {downloadUrl}.")