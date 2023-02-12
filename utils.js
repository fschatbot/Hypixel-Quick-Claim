window.i18n = {
	pageTitle: "Claim your Reward",
	socialDescription: "Play award winning minecraft games and mini-games with your friends for free. Only on the Hypixel minecraft server!",
	socialTitle: "Hypixel Reward Card",
	"error.expired": "This link either never existed or has already expired.",
	"error.unavailable": "This service is currently not available, please report this to the team.",
	visitWebsite: "Visit the Hypixel Website",
	mobileNotSupported: "Tablets and mobile devices are currently not supported. Please visit this website with a desktop browser.",
	browserOutdated:
		"Your browser is either outdated or does not support modern web technologies and won't be able to run this website. Please change or upgrade your browser. We do heavily recommend Chrome for the best experience.",
	getChrome: "Get Chrome",
	ingameMessage:
		"§a-----------------------------------------------------\n§fYou have claimed a {$color}§l[{$rarity} {$item}] §freward card!\nCheck back tomorrow to claim your next reward, or use\n§eReward Tokens §fat the Delivery Man to try again!\n§a-----------------------------------------------------",
	"rarity.common": "Common",
	"rarity.epic": "Epic",
	"rarity.rare": "Rare",
	"rarity.legendary": "Legendary",
	"tooltip.rarity": "Rarity: ",
	"rewards.title.uncover": "Hover over a card to uncover",
	"rewards.title.clickToClaim": "Click to claim 1 of the 3 Rewards",
	"rewards.title.claimed": "Your reward has been claimed!",
	"rewards.title.goBack": "Head back to the Hypixel server to enjoy it",
	dailyStreak: "Daily Streak",
	"dailyStreak.tooltip": "After claiming each day for 9 days in a row, you receive +1 Reward Token which gives you one more chance to claim a reward",
	"dailyStreak.tooltip.title": "Daily Streak Reward",
	currentScore: "Current Score: ",
	highScore: "High Score: ",
	"ad.skip": "Skip",
	"ad.skipMessage": "You can skip this video because of your rank.",
	"ad.skipMessageUpgrade": "Skip these videos by purchasing a rank on our store.",
	"ad.timeLeft": "Watch this video for {$seconds}s and claim your reward!",
	"ad.timeLeftUnknown": "Watch this video and claim your reward!",
	"type.coins": "{$game} Coins",
	"type.coins.description": "In-game Coins for {$game}",
	"type.dust": "Mystery Dust",
	"type.dust.description": "Used to craft cosmetic items",
	"type.experience": "Hypixel EXP",
	"type.experience.description": "Used to increase your Hypixel Level",
	"type.mystery_box": "Mystery Box",
	"type.mystery_box.description": "Open to unlock cosmetic items!",
	"type.souls": "SkyWars Souls",
	"type.souls.description": "Used with the SkyWars Soul Well",
	"type.gift_box": "Gift Box",
	"type.gift_box.description": "Send a Mystery Box to your friends!",
	"type.housing_package": "Housing Item",
	"type.housing_package.description": "1 of 6 unique Housing Blocks in this set",
	"type.adsense_token": "Reward Token",
	"type.tokens": "{$game} Tokens",
	"type.tokens.description": "In-game tokens for {$game}",
	"type.adsense_token.description": "Each token gives you 1 more go at drawing Reward Cards",
	"vanity.suits.description": "1 of 4 unique cosmetic suit parts",
	"vanity.emotes.description": "A unique animated Emote item",
	"vanity.gestures.description": "A unique animated Gesture item",
	"vanity.suit_treasure": "Treasure Hunter Suit",
	"vanity.armor.helmet": "Helmet",
	"vanity.armor.leggings": "Leggings",
	"vanity.armor.boots": "Boots",
	"vanity.armor.chestplate": "Chestplate",
	"vanity.emote_moustache": "Moustache Emote",
	"vanity.taunt_treasure": "Dig for Treasure Gesture",
	"housing.red_treasure_chest": "Housing Block",
	"housing.blue_treasure_chest": "Housing Block",
	"housing.green_treasure_chest": "Housing Block",
	"housing.skull.red_treasure_chest": "Red Treasure Chest",
	"housing.skull.blue_treasure_chest": "Blue Treasure Chest",
	"housing.skull.green_treasure_chest": "Green Treasure Chest",
	"housing.skull.gold_nugget": "Gold Nugget",
	"housing.skull.pot_o'_gold": "Pot O' Gold",
	"housing.skull.rubik's_cube": "Rubik's Cube",
	"housing.skull.piggy_bank": "Piggy Bank",
	"housing.skull.health_potion": "Health Potion",
	"housing.skull.coin_bag": "Coin Bag",
	"housing.skull.ornamental_helmet": "Ornamental Helmet",
	"housing.skull.pocket_galaxy": "Pocket Galaxy",
	"housing.skull.mystic_pearl": "Mystic Pearl",
	"housing.skull.agility_potion": "Agility Potion",
	"housing.skull.golden_chalice": "Golden Chalice",
	"housing.skull.jewelery_box": "Jewelery Box",
	"housing.skull.crown": "Crown",
	"housing.skull.molten_core": "Molten Core",
	"housing.skull.mana_potion": "Mana Potion",
	help: "Help",
	close: "Close",
	adblocker: "We have detected that you are using an Ad Blocker. To claim your reward, you must disable Ad Blocking on this website.",
	"help.text":
		"<h1>HOW IT WORKS</h1>\n\nEach time you claim, 3 cards are drawn at random from our deck. Rewards include minigame coins, Hypixel Experience, Mystery Box items and more! You can left-click to claim 1 of these 3 rewards to receive in-game. Hover over a revealed card to find out more about it.\n\nReward Cards can be Common, Rare, Epic or Legendary rarity level. Common is the least valuable, and Legendary is the most valuable and most difficult to find.\n\nBy default you can claim 1 time per day - the timer resets each day at midnight EST (04:00AM UTC).\n\n<h1>REWARD TOKENS</h1>\n\nYou can use Reward Tokens to claim more rewards - 1 token can be spent at the Delivery Man to let you claim 1 extra time. Reward Tokens can currently be found in cards, and we may add more ways to unlock them across the server.\n\n<h1>DAILY STREAK</h1>\n\nIncluded in the system is a Daily Streak counter. For each day you claim in a row, you build up your streak which is displayed on the Rewards web page. After claiming each day for 9 days in a row, you get 1 free Reward Token, which lets you claim 1 extra time!\n\n<h1>SHARING ON SOCIAL MEDIA</h1>\n\nAfter claiming a card you can share it on Twitter or Facebook by clicking the icons. You can also download the card image for uploading on other websites, or sharing right here on the forums!",
};
const data = {
	rarity: {
		common: {
			front: "src/client/component/Views/Rewards/Card/_cards/common-front.png",
			amountColor: "#FF9B4E",
			rarityColor: "#ad490d",
			chatColor: "§f",
		},
		epic: {
			front: "src/client/component/Views/Rewards/Card/_cards/epic-front.png",
			amountColor: "#c633e8",
			rarityColor: "#9915de",
			chatColor: "§5",
		},
		rare: {
			front: "src/client/component/Views/Rewards/Card/_cards/rare-front.png",
			amountColor: "#62E2DE",
			rarityColor: "#04cad6",
			chatColor: "§b",
		},
		legendary: {
			front: "src/client/component/Views/Rewards/Card/_cards/legendary-front.png",
			amountColor: "#E2B751",
			rarityColor: "#f3b612",
			chatColor: "§6",
		},
	},
	gameType: {
		WALLS3: "Mega Walls",
		QUAKECRAFT: "Quakecraft",
		WALLS: "Walls",
		PAINTBALL: "Paintball",
		SURVIVAL_GAMES: "Blitz SG",
		TNTGAMES: "TNT Games",
		VAMPIREZ: "VampireZ",
		ARCADE: "Arcade",
		ARENA: "Arena",
		UHC: "UHC",
		MCGO: "Cops and Crims",
		BATTLEGROUND: "Warlords",
		SUPER_SMASH: "Smash Heroes",
		GINGERBREAD: "Turbo Kart Racers",
		SKYWARS: "SkyWars",
		TRUE_COMBAT: "CrazyWalls",
		SPEEDUHC: "Speed UHC",
		MURDER_MYSTERY: "Murder Mystery",
	},
	housingCategories: {
		red_treasure_chest: [
			"specialoccasion_reward_card_skull_red_treasure_chest",
			"specialoccasion_reward_card_skull_gold_nugget",
			"specialoccasion_reward_card_skull_pot_o'_gold",
			"specialoccasion_reward_card_skull_rubik's_cube",
			"specialoccasion_reward_card_skull_piggy_bank",
			"specialoccasion_reward_card_skull_health_potion",
		],
		green_treasure_chest: [
			"specialoccasion_reward_card_skull_green_treasure_chest",
			"specialoccasion_reward_card_skull_coin_bag",
			"specialoccasion_reward_card_skull_ornamental_helmet",
			"specialoccasion_reward_card_skull_pocket_galaxy",
			"specialoccasion_reward_card_skull_mystic_pearl",
			"specialoccasion_reward_card_skull_agility_potion",
		],
		blue_treasure_chest: [
			"specialoccasion_reward_card_skull_blue_treasure_chest",
			"specialoccasion_reward_card_skull_golden_chalice",
			"specialoccasion_reward_card_skull_jewelery_box",
			"specialoccasion_reward_card_skull_crown",
			"specialoccasion_reward_card_skull_molten_core",
			"specialoccasion_reward_card_skull_mana_potion",
		],
	},
};


