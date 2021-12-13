<script context="module" lang="ts">
	import { workStore } from '$stores/work';

	export async function load({ session, page }) {
		const slug = page?.params?.slug;
		if (session) {
			const work = await workStore.get(session.locale, slug);

			// Return homepage content
			return {
				props: {
					session,
					work
				}
			};
		}
	}
</script>

<script lang="ts">
	import type Work from '$types/Work';
	import type Layout from '$types/Layout';
	import Image from '$components/shared/Image.svelte';

	export let session: Layout;
	export let work: Work;
</script>

<svelte:head>
	<title>{session.content.seoTitle} • {work.title}</title>
	<meta name="description" content={work.seoDescription} />
</svelte:head>

<div class="works">
	<h3>{work.title}</h3>
	<p class="mb-8 text-justify">{@html work.description}</p>
	{#each work.gallery as img}
		<Image {img} />
	{/each}
</div>

<style lang="scss">
	.works {
		margin: 2rem;
		min-height: 60vh;
	}
</style>
