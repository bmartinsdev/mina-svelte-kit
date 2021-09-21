<script context="module">
	export async function load() {
		const preferredLang = 'en';

		return {
			status: 301,
			redirect: `/${preferredLang}`
		};
	}
</script>
