<script lang="ts">
	import DarkModeToggle from '$components/layout/DarkModeToggle.svelte';
	import Logo from '$components/layout/Logo.svelte';
	export let locale;
</script>

<nav class="flex justify-between items-start">
	<div class="left-panel">
		<Logo />
	</div>
	<a sveltekit:prefetch href={`/${locale}/about`} class="cursor--hover menu">
		{#if locale == 'pt'}sobre{:else}about{/if}</a
	>
	<div class="right-panel">
		<DarkModeToggle />
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 30;
		.left-panel,
		.right-panel {
			margin: 2rem;
			flex: 1;
		}
		.menu {
			text-transform: uppercase;
			font-family: var(--font-archivo);
			font-size: 1rem;
			line-height: 2rem;
		}
	}
</style>
