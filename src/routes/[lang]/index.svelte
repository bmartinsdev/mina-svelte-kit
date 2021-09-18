<script context="module">
	export async function load({ page, fetch, session, context }) {
		const lang = page.params.lang;

		// Get homepage and menu content from api according to lang

		if (lang) {
			// Return homepage content
			return {
				props: {
					lang
				}
			};
		}
	}
</script>

<script>
	export let lang;
</script>

<h1>Home</h1>
<p>{lang}</p>
