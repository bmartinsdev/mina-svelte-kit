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
	import SimpleLogo from '$components/layout/SimpleLogo.svelte';
	import Image from '$components/shared/Image.svelte';
	import type WorkList from '$types/WorkList';
	import type Layout from '$types/Layout';
	import { goto } from '$app/navigation';
	import ScrollToTop from '$components/layout/ScrollToTop.svelte';

	export let session: Layout;
	export let works: WorkList;
	let loadingMore = false;

	async function loadMore(): Promise<void> {
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
		const goToRoute = `${window.location.pathname}/works/${slug}`;

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

	let scrollY;
</script>

<svelte:head>
	<title>{session.content.seoTitle} • {session.content.seoTitle}</title>
	<meta name="description" content={session.content.seoTitle} />
</svelte:head>

<section class="flex justify-center items-center flex-col banner">
	<h1 class="text-center">
		{session.locale === 'en' ? 'Hello' : 'Olá'}<SimpleLogo />{@html session.content.homeTitle}
	</h1>
</section>
<section class="works">
	{#each works.items as work}
		<article id={work.slug} class="cursor--hover {work.type}" on:click={() => goToRoute(work.slug)}>
			<figure>
				<div class="overlay">
					<h2>{work.title}</h2>
					{#if work.subtitle}<p>{work.subtitle}</p>{/if}
				</div>
				<div class="thumbnail-holder">
					<Image img={work.thumbnail} htmlProps={{ class: 'thumbnail-image' }} />
				</div>
			</figure>
		</article>
	{/each}
</section>
<ScrollToTop />

<svelte:window bind:scrollY />

<style lang="scss">
	.banner {
		position: relative;
		padding: 2rem;
		width: 100%;
		overflow-x: hidden;
		h1 {
			font-weight: 100;
			font-size: 26px;
			line-height: 35px;
			:global(em) {
				white-space: nowrap;
				font-weight: 800;
				font-style: normal;
				text-transform: uppercase;
				position: relative;
				animation-name: censor;
				animation-timing-function: ease-in-out;
				animation-iteration-count: infinite;
				animation-duration: 8s;
				&:before {
					content: '';
					position: absolute;
					height: 120%;
					top: -10%;
					background: rgb(167, 98, 211);
					background: linear-gradient(75deg, rgba(167, 98, 211, 1) 0%, rgba(79, 231, 193, 1) 100%);
					z-index: 10;
					animation-name: censor;
					animation-timing-function: ease-in-out;
					animation-iteration-count: infinite;
					animation-duration: 4s;
				}
			}
			:global(.first) {
				animation-delay: 1s;
				&:before {
					animation-delay: 1s;
				}
			}
			:global(.second) {
				animation-delay: 2s;
				&:before {
					animation-delay: 2s;
				}
			}
			:global(.third) {
				animation-delay: 4s;
				&:before {
					animation-delay: 4s;
				}
			}
		}
	}
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
				@media (max-width: 576px) {
					width: 100%;
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
				@media (max-width: 576px) {
					width: 100%;
					figure {
						padding-top: 100%;
					}
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
				font-size: 1.2rem;
			}
			@media (max-width: 576px) {
				padding: 1rem;
				h2 {
					font-size: 1.1rem;
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
	@media (max-width: 576px) {
		.banner h1 {
			font-size: 1.2rem;
		}
	}

	@keyframes censor {
		0% {
			width: 0%;
		}
		40% {
			width: 0%;
		}
		50% {
			width: 100%;
		}
		90% {
			width: 100%;
		}
		100% {
			width: 0%;
			right: 0;
		}
	}
	@keyframes censor {
		0% {
			color: var(--color);
		}
		41% {
			color: var(--color);
		}
		42% {
			color: var(--bg-color);
		}
		89% {
			color: var(--bg-color);
		}
		90% {
			color: var(--color);
		}
	}
</style>
