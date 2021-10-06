<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let copyright: string = '';
	export let email: string = '';
	export let socialNetworks: [string, string];
	let currentLang: string;

	onMount(() => {
		const current = window.location.pathname;
		currentLang = current.split('/')[1];
		currentLang = ['en', 'pt'].includes(currentLang) ? currentLang : 'en';
	});

	function swapLang(newLang) {
		if (newLang === currentLang) return;
		const goToRoute = window.location.pathname.replace(currentLang, newLang);

		// Required for session preload with the right language
		window.location.pathname = goToRoute;

		goto(goToRoute, { noscroll: true });
	}
</script>

<footer class="flex justify-between items-end">
	<ul class="language">
		<li on:click={() => swapLang('en')} class={currentLang !== 'en' ? 'cursor--hover' : ''}>en</li>
		<li on:click={() => swapLang('pt')} class={currentLang !== 'pt' ? 'cursor--hover' : ''}>pt</li>
	</ul>
	<h4 class="copyright">{@html copyright}</h4>
	<nav class="contacts">
		<h2><a href="mailto:{email}" class="--cursor-hover">{email}</a></h2>
		{#if socialNetworks}
			<ul class="networks flex justify-between">
				{#each Object.entries(socialNetworks) as [name, link]}
					<li><a href={link} target="_blank" class="cursor--hover">{name}</a></li>
				{/each}
			</ul>
		{/if}
	</nav>
</footer>

<style lang="scss">
	footer {
		background-color: var(--color);
		color: var(--bg-color);
		flex-wrap: wrap;
		padding: 1rem;
		.language {
			font-size: 1.3rem;
			margin: 0.4rem;
		}
		.copyright {
			font-family: var(--font-archivo);
			font-weight: 100;
			font-size: 1.1rem;
			margin: 0.4rem;
		}
		.contacts {
			margin: 0.4rem;
			font-size: 2.6rem;
			.networks {
				font-size: 1.4rem;
				font-family: var(--font-archivo);
				font-weight: 100;
				li {
					padding-right: 0.8rem;
					&:last-child {
						padding-right: unset;
					}
				}
			}
		}
	}
	@media (max-width: 576px) {
		footer .language {
			width: 100%;
			li {
				display: inline-block;
			}
		}
	}
</style>
