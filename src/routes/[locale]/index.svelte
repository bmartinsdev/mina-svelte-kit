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
	import type Layout from '$types/Layout';
	import SimpleLogo from '$components/layout/SimpleLogo.svelte';

	export let session: Layout;

	let scrollY;
</script>

<svelte:head>
	<title>{session.content.seoTitle}</title>
	<meta name="description" content={session.content.seoDescription} />
</svelte:head>

<section class="flex justify-center items-center flex-col banner">
	<h1 class="text-center">
		{session.locale === 'en' ? 'Hello' : 'Olá'}<SimpleLogo />{@html session.content.homeTitle}
	</h1>
</section>

<svelte:window bind:scrollY />

<style lang="scss">
	.banner {
		position: relative;
		height: 60vh;
		width: 100%;
		overflow-x: hidden;
		h1 {
			font-weight: 100;
			font-size: 26px;
			line-height: 35px;
			:global(em) {
				white-space: nowrap;
				font-weight: 900;
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
	.bottom {
		height: 50vh;
		.logo-holder {
			width: 28rem;
			max-width: 70%;
			margin: 2rem;
			svg {
				width: 100%;
				fill: var(--color);
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
