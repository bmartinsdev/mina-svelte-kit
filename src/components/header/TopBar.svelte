<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
	import Logo from './Logo.svelte';
</script>

<nav class="flex justify-between items-start">
	<Logo />
	<DarkModeToggle />
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		z-index: 30;
		height: 10rem;
	}
</style>
