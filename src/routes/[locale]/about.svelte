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

<div class="about-content">
	<div class="description">
		{@html about.description}
	</div>
	<div class="image">
		<img src={about.image.path} alt={about.image.title} />
	</div>
	<div class="bio">
		{@html about.bio}
	</div>
	<div class="photo">
		<img src={about.photo.path} alt={about.photo.title} />
	</div>
</div>

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
