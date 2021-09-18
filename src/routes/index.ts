
export async function load({ page }) {
	const { slug } = page.params;

	// Get preferred lang || redirect to en
	const preferredLang = 'en';

	return {
		status: 301,
		redirect: `/${preferredLang}`
	};
}