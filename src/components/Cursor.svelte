<script lang="ts">
	import { onMount } from 'svelte';

	let mousePos = { x: 0, y: 0 };
	let mouseState = 'default';
	let stuck = {
		active: false,
		x: 0,
		y: 0
	};

	onMount(() => {
		// Trigger mousemove follow
		document.onmousemove = handleMouseMove;
		updateLinkList();
	});

	function updateLinkList() {
		const triggers = document.querySelectorAll('.cursor--hover');
		// Trigger link watching for custom animation
		triggers.forEach((trigger) => {
			trigger.addEventListener('mouseenter', handleMouseEnter);
			trigger.addEventListener('mouseleave', handleMouseLeave);
		});
	}

	function handleMouseMove(e) {
		if (!stuck.active) {
			mousePos = { x: e.clientX, y: e.clientY };
		} else {
			mousePos = { x: stuck.x, y: stuck.y };
		}
	}
	function handleMouseEnter(e) {
		const navItem = e.currentTarget;
		const navItemBox = navItem.getBoundingClientRect();
		mouseState = 'hover';

		stuck.x = Math.round(navItemBox.left + navItemBox.width / 2 - 20);
		stuck.y = Math.round(navItemBox.top + navItemBox.height / 2 - 20);
		stuck.active = true;
	}
	function handleMouseLeave() {
		mouseState = 'default';
		stuck.active = false;
	}
</script>

<div id="cursor" style="left: {mousePos.x}px; top: {mousePos.y}px;" class={mouseState} />

<style lang="scss">
	#cursor {
		position: absolute;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		pointer-events: none;
		mix-blend-mode: difference;
		border: 2px solid var(--color);
		transition: height 0.4s ease-in-out, width 0.4s ease-in-out;
		&.hover {
			width: 40px;
			height: 40px;
			background-color: var(--color);
			transition: left 0.4s ease-in-out, top 0.4s ease-in-out, background-color 0.4s ease-in-out;
		}
	}
</style>
