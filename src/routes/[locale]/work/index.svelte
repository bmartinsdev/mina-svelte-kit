<script context="module" lang="ts">
	import { workStore } from '../../../stores/work';

	export async function load({ session }) {
		if (session) {
			const works = await workStore.getList(session.locale);

			// Return homepage content
			return {
				props: {
					session,
					works
				}
			};
		}
	}
</script>

<script lang="ts">
	import type Layout from '../../../types/Layout';

	export let session: Layout;
</script>

<svelte:head>
	<title>{session.content.seoTitle} • {session.content.seoTitle}</title>
	<meta name="description" content={session.content.seoTitle} />
</svelte:head>

<div class="works">
	<h1 class="text-center">work</h1>
</div>

<style lang="scss">
	.works {
		margin: 2rem;
		height: 20rem;
		min-height: 60vh;
	}
</style>
