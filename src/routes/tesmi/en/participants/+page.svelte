<script>
    export let data;
    const participants = data.participants;
</script>


<div class="wrap">
    <h1>Ilmonneet</h1>
{#if participants && participants?.fitting_participants?.length}
    {#each participants.fitting_participants as p}
    <p>{p.first_name} {p.last_name}</p>    
    {/each}
{/if}
</div>