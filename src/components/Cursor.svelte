<script lang="ts">
	import { onMount } from 'svelte';

	let mouse = { x: 0, y: 0 };
	onMount(() => (document.onmousemove = handleMousemove));

	function handleMousemove(e) {
		mouse = { x: e.clientX - 10, y: e.clientY - 10 };
	}
</script>

<div class="cursor" style="left: {mouse.x}px;top: {mouse.y}px" />

<style lang="scss">
	.cursor {
		position: absolute;
		height: 25px;
		width: 25px;
		border-radius: 50%;
		border: 2px solid var(--color);
		pointer-events: none;
		mix-blend-mode: difference;
	}
</style>
