<script context="module" lang="ts">
	export async function load({ session }) {
		if (session) {
			// Return homepage content
			return {
				props: {
					session
				}
			};
		}
	}
</script>

<script lang="ts">
	import Tailwind from '../libs/Tailwind.svelte';
	import TopBar from '../components/header/TopBar.svelte';
</script>

<Tailwind />
<TopBar />

<slot />

<style lang="scss" global>
	@import '../global.scss';
</style>
