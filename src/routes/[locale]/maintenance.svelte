<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => (document.cookie = `maintenance=false`));
</script>

<section class="about-content text-center min-h-full">Cookie set</section>
