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
	<div class="left">
		<article class="description">
			{@html about.description}
		</article>
		<figure class="image">
			<Image img={about.image} />
		</figure>
	</div>
	<div class="right">
		<figure class="photo">
			<Image img={about.photo} />
		</figure>
		<article class="bio">
			{@html about.bio}
		</article>
	</div>
</section>

<style lang="scss">
	.about-content {
		margin: 1rem;
		display: flex;
		flex-wrap: wrap;
		.left,
		.right {
			width: 50%;
		}
		figure,
		article {
			padding: 1rem;
		}
	}
	@media (max-width: 916px) {
		.about-content {
			.left,
			.right {
				width: 100%;
			}
			.right {
				display: flex;
				flex-direction: column-reverse;
			}
		}
	}
</style>
