<script>
    import Posts from "$lib/components/posts.svelte";
    export let data;

    async function getPosts() {
        const response = await fetch('https://www.asteriski.fi/wp-json/wp/v2/posts?tags=2200&_embed&per_page=4', {
            method: 'GET'
        });

        const data2 = await response.json();
        console.log(data2);
    }
    console.log(data);
</script>

<!-- <Posts posts={data.posts}/> -->
<button on:click={getPosts}>nappula</button>