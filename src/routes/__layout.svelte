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
	import TopBar from '$components/layout/TopBar.svelte';
	import Cursor from '$components/shared/Cursor.svelte';
	import Footer from '$components/layout/Footer.svelte';
	import type Layout from '$types/Layout';

	export let session: Layout;
</script>

<TopBar {...session} />
<Cursor />
<slot />
<Footer {...session.content} />

<style lang="scss" global>
	@import '../global.scss';
</style>
