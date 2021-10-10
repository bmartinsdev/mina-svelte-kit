<script lang="ts">
	export let locale;
</script>

<ul>
	<li><a sveltekit:prefetch href={`/${locale}/works`} class="cursor--hover">works</a></li>
	<li><a sveltekit:prefetch href={`/${locale}/about`} class="cursor--hover">about</a></li>
</ul>

<style lang="scss">
	ul {
		z-index: 10;
		font-size: 1.4rem;
		line-height: 2rem;
		margin-bottom: 0.4rem;
	}
</style>
