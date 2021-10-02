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
	import Footer from '../components/Footer.svelte';
	import type Layout from '../types/Layout';

	export let session: Layout;
</script>

<TopBar locale={session.locale} />
<Cursor />
<slot />
<Footer {...session.content} />

<style lang="scss" global>
	@import '../global.scss';
</style>
