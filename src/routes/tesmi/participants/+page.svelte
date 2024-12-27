<script>
    export let data;
    console.log(data.participants);
    const participants = data.participants;
</script>


<div class="wrap">
    <h1>Ilmonneet</h1>
{#each participants.fitting_participants as p}
<p>{p.first_name} {p.last_name}</p>    

{/each}
</div>