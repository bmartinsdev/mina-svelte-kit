<script lang="ts">
	import { onMount } from 'svelte';
	import type Image from '$types/Image';

	export let img: Image;
	export let htmlProps: any = {};
	let src = '';
	let alt = '';
	let loaded = false;
	onMount(() => {
		const imageLoad = new Image();
		imageLoad.src = img.large;

		imageLoad.onload = () => {
			src = img.large;
			setTimeout(() => (loaded = true), 100);
		};
	});
</script>

<div class="image-holder">
	<div class="overlay" class:loaded />
	<img {src} {alt} {...htmlProps} />
</div>

<style lang="scss">
	.image-holder {
		width: 100%;
		height: 100%;
		.overlay {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background-color: var(--bg-color);
			opacity: 1;
			transition: opacity 0.4s ease-in-out;
			&.loaded {
				opacity: 0;
			}
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
