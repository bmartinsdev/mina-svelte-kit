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
	import type WorkList from '../../../types/WorkList';
	import type Layout from '../../../types/Layout';
	import { goto } from '$app/navigation';

	export let session: Layout;
	export let works: WorkList;

	async function loadMore() {
		const returnedWorks = await workStore.getList(session.locale, works.items.length);
		// Push new works avoiding duplicates
		const workIds = new Set(works.items.map((work) => work.id));
		returnedWorks.items = [
			...works.items,
			...returnedWorks.items.filter((work) => !workIds.has(work.id))
		];
		works = returnedWorks;
	}

	async function goToRoute(slug: string) {
		const goToRoute = `${window.location.pathname}/${slug}`;

		// Required for session preload with the right language
		window.location.pathname = goToRoute;

		goto(goToRoute, { noscroll: true });
	}
</script>

<svelte:head>
	<title>{session.content.seoTitle} • {session.content.seoTitle}</title>
	<meta name="description" content={session.content.seoTitle} />
</svelte:head>

<div class="works">
	{#each works.items as work}
		<h3 on:click={() => goToRoute(work.slug)}>{work.title}</h3>
		<small>{work.subtitle}</small>
	{/each}
	{#if works.missing > 0}<h1 on:click={loadMore}>Load more</h1>{/if}
</div>

<style lang="scss">
	.works {
		margin: 2rem;
		min-height: 60vh;
	}
</style>
