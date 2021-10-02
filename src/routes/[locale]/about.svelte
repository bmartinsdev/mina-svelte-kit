<script context="module" lang="ts">
	import { aboutStore } from '../../stores/about';

	export async function load({ session }) {
		if (session) {
			const about = await aboutStore.getContent(session.locale);

			// Return homepage content
			return {
				props: {
					about
				}
			};
		}
	}
</script>

<script lang="ts">
	import type About from '../../types/About';

	export let about: About;
</script>

<div class="flex justify-center items-center flex-col">
	<p class="text text-center">
		{@html about.description}
	</p>
	<img src={about.image.path} alt={about.image.title} />
	<p class="text text-center">
		{@html about.bio}
	</p>
	<img src={about.photo.path} alt={about.photo.title} />
</div>

<style lang="scss">
</style>
