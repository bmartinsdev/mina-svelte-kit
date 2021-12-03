<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		theme = localStorage.getItem('theme');

		if (!['light', 'dark'].includes(theme)) {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}

		setTheme();
	});

	function setTheme() {
		if (theme === 'light') {
			document.body.classList.add('light');
			localStorage.setItem('theme', 'light');
		} else {
			document.body.classList.remove('light');
			localStorage.setItem('theme', 'dark');
		}
	}
	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';

		setTheme();
	}

	let theme;
</script>

<img
	src={theme != 'light' ? '/imgs/sun.svg' : '/imgs/moon.svg'}
	alt="toggle theme"
	class="toggle-theme cursor--hover"
	on:click={toggleTheme}
/>

<style lang="scss">
	.toggle-theme {
		float: right;
		width: 2rem;
	}
</style>
