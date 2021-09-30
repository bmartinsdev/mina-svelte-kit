<script lang="ts">
	export let copyright: string = '';
	export let email: string = '';
	export let socialNetworks: [string, string];
</script>

<footer class="flex justify-between items-end">
	<div class="copyright">{copyright}</div>
	<div class="contacts">
		<h2>{email}</h2>
		<ul>
			{#each socialNetworks as [name, link]}
				<li><a href={link} target="_blank">{name}</a></li>
			{/each}
		</ul>
	</div>
</footer>

<style lang="scss">
	footer {
		height: 40rem;
	}
</style>
