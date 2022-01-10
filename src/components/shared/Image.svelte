<script lang="ts">
	import { onMount } from 'svelte';
	import type Image from '$types/Image';

	export let img: Image;
	export let htmlProps: unknown = {};
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

<div class="image-holder" class:loading>
	<div class="overlay" />
	<img src={img.large} {alt} {...htmlProps} />
</div>

<style lang="scss">
	.image-holder {
		min-height: 20%;
		width: 100%;
		height: 100%;
		position: relative;
		&.loading {
			.overlay {
				opacity: 1;
				animation: pulseOpacity 1.4s ease-out infinite;
			}
			img {
				opacity: 0;
			}
		}
		.overlay {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background-color: var(--overlay-color);
			opacity: 0;
			transition: opacity 0.4s ease-in-out;
		}
		img {
			width: 100%;
			height: 100%;
			transition: opacity 0.4s ease-in-out;
			opacity: 1;
		}
	}
</style>
