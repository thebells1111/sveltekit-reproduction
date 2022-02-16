<script>
	import { onMount } from 'svelte';
	async function getCookies() {
		let response = await fetch(`api/getcookies`, {
			credentials: 'include'
		});

		let data = await response.json();
		console.log(data);
	}

	onMount(getCookies);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
</style>
