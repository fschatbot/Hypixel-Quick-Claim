const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

exports.handler = async (event, context) => {
	const { id } = event.queryStringParameters;
	if (!id)
		return {
			statusCode: 400,
			body: JSON.stringify({ error: "Missing id" }),
		};

	const response = await fetch(`https://rewards.hypixel.net/claim-reward/${id}`, { "user-agent": "QuickBrowserClaimer/1.0.0" });
	// Parse the HTML
	const text = await response.text();
	const dom = new JSDOM(text);
	const scriptTag = dom.window.document.body.querySelector("script");

	// Get the CSRF token from the cookies
	const _csrf_cookie = response.headers
		.get("set-cookie")
		.split(",")
		.map((x) => x.split(";")[0])
		.map((x) => x.split("="))
		.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})["_csrf"];

	return {
		statusCode: 200,
		body: JSON.stringify({ evalScript: scriptTag.textContent }),
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			// Set the CSRF token as a cookie
			"Set-Cookie": `_csrf=${_csrf_cookie}; Path=/; HttpOnly; SameSite=Lax`,
		},
	};
};
