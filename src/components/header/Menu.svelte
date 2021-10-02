<script lang="ts">
	export let locale;

	console.log(locale);
</script>

<nav>
	<ul>
		<li><a sveltekit:prefetch href={`/${locale}/work`} class="cursor--hover">work</a></li>
		<li><a sveltekit:prefetch href={`/${locale}/about`} class="cursor--hover">about</a></li>
	</ul>
</nav>

<style lang="scss">
	nav {
		font-size: 1.4rem;
		line-height: 2.6rem;
		margin-bottom: 1rem;
	}
</style>
