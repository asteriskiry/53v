<script>
    export let data;
    const participants = data.participants;
    console.log(data.api)
</script>


<div class="wrap">
    <h1>Ilmonneet</h1>
{#if participants.length && participants.fitting_participants.length}
    {#each participants.fitting_participants as p}
    <p>{p.first_name} {p.last_name}</p>    
    {/each}
{/if}
</div>