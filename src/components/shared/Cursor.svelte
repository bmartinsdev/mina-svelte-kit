<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let interval;
	let mousePos = { x: 0, y: 0 };
	let mouseState = 'default';

	onMount(() => {
		// Trigger mousemove follow
		document.onmousemove = handleMouseMove;
		interval = setInterval(() => checkLinkList(), 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	async function checkLinkList() {
		const triggers = document.querySelectorAll('.cursor--hover');
		// Trigger link watching for custom animation
		triggers.forEach((trigger) => {
			trigger.addEventListener('mouseenter', handleMouseEnter);
			trigger.addEventListener('mouseleave', handleMouseLeave);
		});
	}

	function handleMouseMove(e) {
		mousePos = { x: e.clientX, y: e.clientY };
	}

	function handleMouseEnter(e) {
		mouseState = 'hover';
	}

	function handleMouseLeave() {
		mouseState = 'default';
	}
</script>

<div id="cursor" style="left: {mousePos.x}px; top: {mousePos.y}px;" class={mouseState} />

<style lang="scss">
	#cursor {
		z-index: 99;
		position: fixed;
		width: 20px;
		height: 20px;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		pointer-events: none;
		mix-blend-mode: difference;
		background-color: var(--color);
		transition: height 0.8s cubic-bezier(0.39, 0.575, 0.565, 1),
			width 0.8s cubic-bezier(0.39, 0.575, 0.565, 1),
			background-color 0.8s cubic-bezier(0.39, 0.575, 0.565, 1);
		&.hover {
			width: 50px;
			height: 50px;
			background-color: var(--color);
			transition: height 0.8s cubic-bezier(0.39, 0.575, 0.565, 1),
				width 0.8s cubic-bezier(0.39, 0.575, 0.565, 1),
				background-color 0.8s cubic-bezier(0.39, 0.575, 0.565, 1);
		}
	}
</style>
