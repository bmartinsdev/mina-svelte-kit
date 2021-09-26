<script lang="ts">
	let temperature;
</script>

{#if temperature > 100}
	<p>too hot!</p>
{:else if 80 > temperature}
	<p>too cold!</p>
{:else}
	<p>{temperature} just right!</p>
{/if}
