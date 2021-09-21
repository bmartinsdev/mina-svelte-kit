<script context="module">
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

<script>
	export let session;
</script>

<h1>Home</h1>
<p>{session.lang}</p>
<p>{session.theme}</p>
