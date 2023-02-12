// Page Load Code
if (!window.location.hash) {
	document.querySelector(".body#input").removeAttribute("hidden");
	document.querySelector(".body#claiming").setAttribute("hidden", "");
	document.querySelector(".body#loading").setAttribute("hidden", "");
} else {
	document.querySelector(".body#input").setAttribute("hidden", "");
	document.querySelector(".body#claiming").setAttribute("hidden", "");
	document.querySelector(".body#loading").removeAttribute("hidden");

	triggerClaiming();
}

// Input Page Code
document.querySelector("#input input").addEventListener("keyup", function (event) {
	if (
		event.keyCode === 13 ||
		event.which === 13 ||
		event.key === "Enter" ||
		event.keyIdentifier === "Enter" ||
		event.code === "Enter" ||
		event.key === "NumpadEnter" ||
		event.keyIdentifier === "NumpadEnter" ||
		event.code === "NumpadEnter"
	) {
		event.preventDefault();
		setClaimID();
	}
});

document.querySelector("#input button").addEventListener("click", function (event) {
	event.preventDefault();
	setClaimID();
});

function setClaimID() {
	const id = document.querySelector("#input input").value;
	// Use regex to make sure the ID is 8 characters long and contains only numbers and small letters
	if (id.length !== 8 || !/^[a-z0-9]+$/.test(id)) {
		// Trigger a animation and make it so it can be shown multiple times
		document.querySelector("#input .inputBox").classList.remove("error");
		void document.querySelector("#input .inputBox").offsetWidth; // Allows the animation to be triggered multiple times
		document.querySelector("#input .inputBox").classList.add("error");
		return;
	}
	window.location.hash = document.querySelector("#input input").value;
	window.location.reload();
}

// Claiming Page Code
function getData() {
	return fetch("/.netlify/functions/getID?id=" + window.location.hash.slice(1))
		.then((response) => response.json())
		.then((data) => {
			eval(data.evalScript);
			return { appData: JSON.parse(window.appData), claimID: window.location.hash.slice(1), securityToken: window.securityToken };
		});
}

function triggerClaiming() {
	getData()
		.then((data) => {
			// Changing the page
			document.querySelector(".body#loading").setAttribute("hidden", "");
			document.querySelector(".body#claiming").removeAttribute("hidden");
			// Setting the daily streaks
			const { dailyStreak } = data.appData;
			document.querySelector("#claiming .streak h1").textContent = `Daily Streak (Curr: ${dailyStreak.score}) (High: ${dailyStreak.highScore})`;
			document.querySelector("#claiming .streak .progress-bar").style.width = `${(dailyStreak.value / dailyStreak.highScore) * 100}%`;
			document.querySelector("#claiming .streak .progress-bar").textContent = `${dailyStreak.value}/9`;

			return data;
		})
		.then((data) => {
			// Setting the cards
			const { rewards } = data.appData;
			rewards.forEach((reward) => document.querySelector("#claiming .cards").appendChild(RewardCard(reward, claimCallBack(data))));
			console.log(rewards);
		})
		.then(() => {
			// Resizing the text
			const text = document.querySelectorAll("#claiming .card .heading");
			text.forEach((text) => textFit(text, { alignVert: true, maxFontSize: 20 }));
		});
}

// https://hypixel.net/threads/technical-overview-rewards-hypixel-net.4759148/#posts
//

function RewardCard(reward, clickCallback) {
	// Following some logic to determine all the nessary images
	const images = calculateImageUrls(reward);

	// Returning a cardContainer element with the reward drawn on it
	const cardContainer = document.createElement("div");
	cardContainer.classList.add("card");

	// Drawing the mask aka background
	cardContainer.style.backgroundImage = `url(${images.card})`;

	// Drawing the main icon
	const icon = document.createElement("img");
	icon.src = images.icon;
	icon.classList.add("icon");
	cardContainer.appendChild(icon);

	function addIcon(image, x, y, width, height) {
		const icon = document.createElement("img");
		icon.src = image;
		icon.style.position = "absolute";
		icon.style.left = `${x}px`;
		icon.style.top = `${y}px`;
		if (width) icon.style.width = `${width}px`;
		if (height) icon.style.height = `${height}px`;
		cardContainer.appendChild(icon);
	}
	if (images.gameIcon) {
		addIcon(images.gameIcon, 137, 132);
	}
	if (images.housingIcon) {
		addIcon(images.vanityBg, 130, 126);
		addIcon(images.housingIcon, 136, 132, 40, 40);
	}
	if (images.vanityIcon) {
		addIcon(images.vanityBg, 130, 128);
		addIcon(images.vanityIcon, 132, 130);
	}

	// Drawing the heading
	const heading = document.createElement("h1");
	heading.innerText = getDisplayName(reward);
	heading.classList.add("heading");
	cardContainer.appendChild(heading);

	// Drawing the amount
	const amount = document.createElement("h2");
	amount.innerText = reward.amount;
	amount.classList.add("amount");
	amount.style.color = data.rarity[reward.rarity.toLowerCase()].amountColor;
	cardContainer.appendChild(amount);

	// Adding the callback
	cardContainer.addEventListener("click", clickCallback(reward));

	return cardContainer;
}

function getHousingCategory(reward) {
	for (const key in data.housingCategories) {
		if (data.housingCategories[key].indexOf(reward.package) !== -1) {
			return key;
		}
	}
	return null;
}

function getTypeIcon(reward) {
	const type = reward.reward;
	const key = reward.key;

	if (type === "housing_package") {
		return `_icons/${getHousingCategory(reward)}.png`;
	}

	if (type === "add_vanity") {
		if (key.indexOf("emote") !== -1) {
			return `_icons/emote.png`;
		} else if (key.indexOf("taunt") !== -1) {
			return `_icons/gesture.png`;
		} else if (key.indexOf("suit") !== -1) {
			return `_icons/minerhead.png`;
		} else {
			return `_icons/emote.png`;
		}
	}

	return `_icons/${type}.png`;
}

function calculateImageUrls(reward) {
	let images = {
		card: `assets/_cards/${reward.rarity.toLowerCase()}-front.png`,
		icon: `assets/${getTypeIcon(reward)}`,
	};
	if (reward.gameType) images.gameIcon = `assets/_gameIcon/${reward.gameType}.png`;

	if (reward.package) {
		const key = reward.package.replace("specialoccasion_reward_card_skull_", "");
		images.housingIcon = `assets/_housing/${key}.png`;
		images.vanityBg = `assets/_housing-bg.png`;
	}

	if (reward.key) {
		const key = reward.key;
		if (key.indexOf("suit") !== -1 && key.indexOf("helmet") === -1) {
			images.vanityIcon = `assets/_armor/${getArmorPiece()}.png`;
			images.vanityBg = `assets/_armor-bg.png`;
		}
	}

	if (reward.rarity === "LEGENDARY") {
		// TODO: Something special maybe?
	}

	return images;
}

function translate(id, args = {}) {
	let str = window.i18n[id] || `{${id}}`;

	if (str) {
		for (const key in args) {
			if (key === "id") continue;
			str = str.replace(`{$${key}}`, args[key]);
		}
	}

	return str;
}

function getDisplayName(reward) {
	if (reward.reward === "housing_package") {
		return translate(`housing.${getHousingCategory(reward)}`);
	}

	if (reward.reward === "add_vanity") {
		if (reward.key.indexOf("suit") !== -1) {
			return translate(`vanity.${reward.key.replace(/_([a-z]+)$/i, "")}`);
		}
		return translate(`vanity.${reward.key}`);
	}

	if (reward.reward === "coins") {
		return translate(`type.${reward.reward}`, {
			game: data.gameType[reward.gameType],
		});
	}

	return translate(`type.${reward.reward}`);
}

function claimCallBack(data) {
	return function (reward) {
		const payload = {
			id: data.claimID,
			reward: data.appData.rewards.indexOf(reward),
			activeAd: data.appData.activeAd,
			securityToken: data.securityToken,
		};
		return function () {
			fetch("/.netlify/functions/claimID", { method: "POST", body: JSON.stringify(payload) })
				.then((res) => {
					if (res.ok) return res.json();
					else throw new Error("Failed to claim reward");
				})
				.then(console.log)
				.catch(console.error);
		};
	};
}
