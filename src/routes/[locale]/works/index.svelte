<script context="module" lang="ts">
	import { workStore } from '$stores/work';

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
	import { onMount } from 'svelte';
	import Image from '$components/shared/Image.svelte';
	import type WorkList from '$types/WorkList';
	import type Layout from '$types/Layout';
	import { goto } from '$app/navigation';

	export let session: Layout;
	export let works: WorkList;
	let loadingMore: boolean = false;

	async function loadMore() {
		if (loadingMore || !works.missing) return;

		loadingMore = true;
		const returnedWorks = await workStore.getList(session.locale, works.items.length);

		// Create new works array, removing duplicates
		const workIds = new Set(works.items.map((work) => work.id));
		returnedWorks.items = [
			...works.items,
			...returnedWorks.items.filter((work) => !workIds.has(work.id))
		];
		loadingMore = false;
		works = returnedWorks;
	}

	async function goToRoute(slug: string) {
		const goToRoute = `${window.location.pathname}/${slug}`;

		goto(goToRoute);
	}

	function handleScroll(e) {
		if (
			e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - 200 <=
			e.target.documentElement.clientHeight
		) {
			loadMore();
		}
	}

	onMount(() => {
		document.onscroll = handleScroll;
	});
</script>

<svelte:head>
	<title>{session.content.seoTitle} • {session.content.seoTitle}</title>
	<meta name="description" content={session.content.seoTitle} />
</svelte:head>

<div class="works">
	{#each works.items as work}
		<article id={work.slug} class="cursor--hover {work.type}" on:click={() => goToRoute(work.slug)}>
			<figure>
				<div class="overlay">
					<h2>{work.title}</h2>
					<p>{work.subtitle}</p>
				</div>
				<div class="thumbnail-holder">
					<Image img={work.thumbnail} htmlProps={{ class: 'thumbnail-image' }} />
				</div>
			</figure>
		</article>
	{/each}
</div>

<style lang="scss">
	.works {
		display: flex;
		flex-wrap: wrap;
		margin: 2rem;
		min-height: 60vh;
		gap: 2%;

		article {
			position: relative;
			margin-bottom: 2%;
			&.small {
				width: 26%;
				@media (max-width: 916px) {
					width: 38%;
				}
				figure {
					padding-top: calc(100% / 0.8);
				}
			}
			&.medium {
				width: 32%;
				@media (max-width: 916px) {
					width: 60%;
				}
			}
			&.large {
				width: 38%;
				figure {
					padding-top: 100%;
				}
				@media (max-width: 916px) {
					width: 100%;
				}
			}
		}
		.overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color: var(--overlay-color-faded);
			z-index: 1;
			opacity: 0;
			transition: opacity 0.4s ease-in-out;
			display: flex;
			flex-direction: column;
			padding: 2rem;
			justify-content: flex-end;
			h2,
			p {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			h2 {
				font-size: 1.4rem;
			}
			@media (max-width: 576px) {
				padding: 1rem;
				h2 {
					font-size: 1.2rem;
				}
				p {
					font-size: 1rem;
				}
			}
			&:hover {
				opacity: 1;
			}
		}

		.thumbnail-holder {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			:global(.thumbnail-image) {
				object-fit: cover;
			}
		}
	}
</style>
