<script lang="ts">
	function scrollToTop() {
		document.body.scrollIntoView();
	}
</script>

<svg
	class="cursor--hover"
	on:click={scrollToTop}
	width="28.479mm"
	height="34.757mm"
	version="1.1"
	viewBox="0 0 28.479 34.757"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	><g transform="translate(-92.547 -83.468)"
		><g transform="matrix(-.26458 0 0 -.26458 189.85 154.49)"
			><path
				d="m364.28 248.65-16.287 16.287-17.488-17.488"
				style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:6.9921;"
				class="arrow-color"
			/><path
				d="m347.99 264.94c3.4692-127.72-62.757-175.56-84.358-54.425"
				style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:6.9921;"
				class="arrow-color"
			/></g
		></g
	></svg
>

<style lang="scss">
	svg {
		width: 2rem;
		height: 2rem;
		margin: 1rem auto;
	}
	.arrow-color {
		stroke: var(--color);
	}
</style>
