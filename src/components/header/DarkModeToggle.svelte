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
	src={darkMode ? '/imgs/sun.svg' : '/imgs/moon.svg'}
	alt="toggle theme"
	class="toggle-theme cursor--hover"
	on:click={toggleTheme}
/>

<style lang="scss">
	.toggle-theme {
		width: 6rem;
		padding: 2rem;
	}
</style>
