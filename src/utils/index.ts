export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

function generateShortUrl() {
	const baseUrl = 'https://rel.ink/';
	// Generate a 6 digit alpha-numeric [A-z] and [0-9] id
	const id = Math.random().toString(36).substring(0, 6);
	return baseUrl + id;
}

export function getShortUrl(url: string) {
	const shortUrl = generateShortUrl();
	return {
		original: url,
		short: shortUrl,
	};
}
