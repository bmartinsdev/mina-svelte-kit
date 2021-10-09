<script lang="ts">
	import DarkModeToggle from '$components/layout/DarkModeToggle.svelte';
	import Logo from '$components/layout/Logo.svelte';
	import Menu from '$components/layout/Menu.svelte';
	export let locale;
	export let maintenance;
</script>

<nav class="flex justify-between items-start">
	<Logo />
	<div class="right-panel">
		{#if !maintenance}<Menu {locale} />{/if}
		<DarkModeToggle />
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		z-index: 30;
		height: 10rem;
		.right-panel {
			margin-top: 2rem;
			margin-right: 2rem;
		}
	}
</style>
