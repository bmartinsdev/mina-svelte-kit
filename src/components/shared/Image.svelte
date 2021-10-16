<script lang="ts">
	import { onMount } from 'svelte';
	import type Image from '$types/Image';

	export let img: Image;
	export let htmlProps: any = {};
	let alt = '';
	let loading = true;
	onMount(() => {
		const imageLoad = new Image();
		imageLoad.src = img.large;

		imageLoad.onload = () => {
			loading = false;
		};
	});
</script>

<div class="image-holder">
	<div class="overlay" class:loading />
	<img src={img.large} {alt} {...htmlProps} />
</div>

<style lang="scss">
	.image-holder {
		width: 100%;
		height: 100%;
		position: relative;
		.overlay {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background-color: var(--overlay-color);
			opacity: 0;
			transition: opacity 0.4s ease-in-out;
			&.loading {
				opacity: 1;
				animation: pulseOpacity 1.4s ease-out infinite;
			}
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
