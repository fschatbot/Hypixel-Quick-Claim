const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

exports.handler = async (event, context) => {
	_csrf_cookie = event.headers.cookie
		.split(";")
		.map((x) => x.split("="))
		.reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value.trim() }), {})["_csrf"];

	if (!_csrf_cookie)
		return {
			statusCode: 400,
			body: JSON.stringify({ error: "Missing _csrf cookie" }),
		};

	payload = JSON.parse(event.body);
	expectedKeys = ["id", "reward", "activeAd", "securityToken"];
	if (!Object.keys(payload).every((key) => expectedKeys.includes(key)))
		return {
			statusCode: 400,
			body: JSON.stringify({ error: "Missing keys" }),
		};
	// Change the key "securityToken" to "_csrf"
	payload["_csrf"] = payload["securityToken"];
	delete payload["securityToken"];

	// Making the claim
	payloadQuery = Object.entries(payload)
		.map(([key, value]) => `${key}=${value}`)
		.join("&");

	const response = await fetch(`https://rewards.hypixel.net/claim-reward/claim?${payloadQuery}`, {
		method: "POST",
		headers: {
			cookie: `_csrf=${_csrf_cookie}`,
			"user-agent": "QuickBrowserClaimer/1.0.0",
		},
	});

	if (response.status !== 200) return { statusCode: response.status, body: await response.text() };

	return {
		statusCode: 200,
		body: JSON.stringify({ response: await response.text() }),
	};
};
