<script context="module" lang="ts">
	export async function load({ session }) {
		if (session) {
			// Return homepage content
			return {
				props: {
					session
				}
			};
		}
	}
</script>

<script lang="ts">
	import type Layout from '../../types/Layout';

	export let session: Layout;
</script>

<div class="flex justify-center items-center banner">
	<h1 class="text-3xl text-center cursor--hover">{@html session.content.homeTitle}</h1>
</div>

<style lang="scss">
	.banner {
		height: calc(100vh - 10rem);
	}
</style>
