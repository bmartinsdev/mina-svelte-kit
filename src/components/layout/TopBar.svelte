<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';
	export let locale;
</script>

<nav class="flex justify-between items-start">
	<Logo />
	<div class="right-panel">
		<Menu {locale} />
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
