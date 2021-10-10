<script lang="ts">
	import { onMount } from 'svelte';
	import type Image from '$types/Image';

	export let img: Image;
	export let htmlProps: any = {};
	let src = '';
	let alt = '';
	let blurred = true;
	onMount(() => {
		src = img.thumb;
		const loaded = new Image();
		loaded.src = img.large;

		loaded.onload = () => {
			setTimeout(() => {
				src = img.large;
				blurred = false;
			}, 200);
		};
	});
</script>

<img {src} {alt} class:blurred {...htmlProps} />

<style lang="scss">
	img {
		width: 100%;
		height: 100%;
		&.blurred {
			filter: blur(2px);
		}
	}
</style>
