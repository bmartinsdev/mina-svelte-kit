<script lang="ts">
	import { onMount } from 'svelte';
	import type Image from '$types/Image';

	export let img: Image;
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

<img {src} {alt} class:blurred loading="lazy" />

<style lang="scss">
	img {
		width: 100%;
		&.blurred {
			filter: blur(2px);
		}
	}
</style>
