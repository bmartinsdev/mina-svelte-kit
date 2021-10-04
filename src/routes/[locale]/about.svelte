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
	import Image from '../../components/shared/Image.svelte';

	export let about: About;
</script>

<section class="about-content">
	<article class="description">
		{@html about.description}
	</article>
	<figure class="image">
		<Image img={about.image} />
	</figure>
	<article class="bio">
		{@html about.bio}
	</article>
	<figure class="photo">
		<Image img={about.photo} />
	</figure>
</section>

<style lang="scss">
	.about-content {
		margin: 2rem;
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: 1fr 1fr;
		.description {
			grid-column: 1;
			grid-row: 1;
		}
		.image {
			grid-column: 2;
			grid-row: 1;
		}
		.bio {
			grid-column: 2;
			grid-row: 2;
		}
		.photo {
			grid-column: 1;
			grid-row: 2;
		}
	}
</style>
