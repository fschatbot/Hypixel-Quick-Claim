// ==UserScript==
// @name         Hypixel Quick Claim
// @namespace    http://fschatbot.github.io/
// @version      1.0
// @description  Redirects the claiming link to a better site
// @author       fschatbot
// @match        https://rewards.hypixel.net/claim-reward/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hypixel.net
// @run-at       document-start
// @downloadURL  https://cdn.jsdelivr.net/gh/fschatbot/Hypixel-Quick-Claim/tampermonkey.js
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	// Simply redirect to the new site
	let claimID = window.location.pathname.split("/")[2];
	window.location.href = `https://hypixelquickclaim.netlify.app/#${claimID}`;
})();
