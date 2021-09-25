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

<h1 class="text-3xl">{session.content.homeTitle}</h1>
<p>{session.locale}</p>
<p>{session.theme}</p>
