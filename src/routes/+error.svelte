<script>
	import { page } from '$app/stores';
</script>

<div class="wrap">
    <p>{$page.status}-{$page.error.message}</p>
    <a href=".">Etusivulle</a>
</div>
