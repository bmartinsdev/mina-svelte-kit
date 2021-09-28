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
	import TopBar from '../components/header/TopBar.svelte';
	import Cursor from '../components/Cursor.svelte';
</script>

<TopBar />
<Cursor />

<slot />

<style lang="scss" global>
	@import '../global.scss';
</style>
