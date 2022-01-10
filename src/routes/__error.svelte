<script context="module" lang="ts">
	export function load({ status }) {
		return {
			props: {
				status
			}
		};
	}
</script>

<script lang="ts">
	export let status;
	export let error;
	error = status === 404 ? 'Page not found' : 'Error retrieving page';
</script>

<svelte:head>
	<title>{status} • {error}</title>
</svelte:head>

<section class="not-found-content">
	<h1>{status}</h1>
	<p>{error}</p>
</section>

<style lang="scss">
	.not-found-content {
		h1 {
			font-size: 3rem;
		}
		margin: 12rem 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;
	}
</style>
