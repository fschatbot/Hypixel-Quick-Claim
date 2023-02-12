// ==UserScript==
// @name         Hypixel Quick Claim
// @namespace    http://fschatbot.github.io/
// @version      1.0
// @description  Redirects the claiming link to a better site
// @author       fschatbot
// @match        https://rewards.hypixel.net/claim-reward/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hypixel.net
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	// Simply redirect to the new site
	let claimID = window.location.pathname.replace("claim-reward", "").replace("/", "");
	window.location.href = `https://fschatbot.github.io/hypixel-quick-claim#${claimID}`;
})();
