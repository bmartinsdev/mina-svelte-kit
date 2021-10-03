<script lang="ts">
	import { goto } from '$app/navigation';
	export let copyright: string = '';
	export let email: string = '';
	export let socialNetworks: [string, string];

	const current = window.location.pathname;
	let currentLang = current.split('/')[1];
	currentLang = ['en', 'pt'].includes(currentLang) ? currentLang : 'en';

	function swapLang(newLang) {
		if (newLang === currentLang) return;
		const goToRoute = window.location.href.replace(currentLang, newLang);
		goto(goToRoute);
	}
</script>

<footer class="flex justify-between items-end">
	<ul class="language">
		<li on:click={() => swapLang('en')} class={currentLang !== 'en' ? 'cursor--hover' : ''}>en</li>
		<li on:click={() => swapLang('pt')} class={currentLang !== 'pt' ? 'cursor--hover' : ''}>pt</li>
	</ul>
	<h4 class="copyright">{@html copyright}</h4>
	<div class="contacts">
		<h2>{email}</h2>
		{#if socialNetworks}
			<ul class="networks flex justify-between">
				{#each Object.entries(socialNetworks) as [name, link]}
					<li><a href={link} target="_blank" class="cursor--hover">{name}</a></li>
				{/each}
			</ul>
		{/if}
	</div>
</footer>

<style lang="scss">
	footer {
		padding: 2rem;
		height: 12rem;
		background-color: var(--color);
		color: var(--bg-color);
		.language {
			font-size: 1.3rem;
		}
		.copyright {
			font-family: var(--font-archivo);
			font-weight: 100;
			font-size: 1.2rem;
		}
		.contacts {
			font-size: 2.6rem;
			.networks {
				font-size: 1.4rem;
				font-family: var(--font-archivo);
				font-weight: 100;
			}
		}
	}
</style>
