<script lang="ts">
	function toggleTheme() {
		if (session.theme === 'dark') {
			document.body.classList.add('light');
			session.theme = 'light';
		} else {
			document.body.classList.remove('light');
			session.theme = 'dark';
		}
	}

	export let session;
</script>

<img
	src={session.theme === 'light' ? 'icons/moon.svg' : 'icons/sun.svg'}
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
