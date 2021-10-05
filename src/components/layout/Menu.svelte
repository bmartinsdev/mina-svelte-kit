<script lang="ts">
	export let locale;
</script>

<ul>
	<li><a sveltekit:prefetch href={`/${locale}/work`} class="cursor--hover">work</a></li>
	<li><a sveltekit:prefetch href={`/${locale}/about`} class="cursor--hover">about</a></li>
</ul>

<style lang="scss">
	ul {
		z-index: 10;
		font-size: 1.4rem;
		line-height: 2.6rem;
		margin-bottom: 1rem;
	}
</style>
