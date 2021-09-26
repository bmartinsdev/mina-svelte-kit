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
	import { onMount } from 'svelte';
	import Tailwind from '../libs/Tailwind.svelte';
	import Header from '../components/Header.svelte';
	import type Layout from '../types/Layout';

	onMount(() => {
		if (!('theme' in localStorage)) {
			session.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
	});

	export let session: Layout;
</script>

<Tailwind />
<Header {session} />

<slot />

<style lang="scss" global>
	@import '../global.scss';
</style>
