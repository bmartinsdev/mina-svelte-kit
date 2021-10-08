<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		document.cookie = `maintenance=false`;

		goto('/');
	});
</script>
