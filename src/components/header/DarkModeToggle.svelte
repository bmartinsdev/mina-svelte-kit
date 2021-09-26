<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		darkMode = localStorage.getItem('theme');

		if (!darkMode) {
			darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			localStorage.setItem('theme', 'dark');
		}
	});

	function toggleTheme() {
		if (darkMode) {
			document.body.classList.add('light');
		} else {
			document.body.classList.remove('light');
		}
		darkMode = !darkMode;
	}

	let darkMode;
</script>

<img
	src={darkMode ? '/icons/sun.svg' : '/icons/moon.svg'}
	alt="toggle theme"
	class="toggle-theme"
	on:click={toggleTheme}
/>

<style lang="scss">
	.toggle-theme {
		width: 2rem;
		margin: 1rem;
		&:hover {
			cursor: pointer;
		}
	}
</style>
