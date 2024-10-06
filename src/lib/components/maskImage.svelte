<script>
    export let img;
</script>

{#if img}

    <div class="image">
        <img src="{img}" alt="logo">
    </div>

{/if}


<style lang="scss">
    .image {
        width: 100%;
        -webkit-mask: url(src/lib/assets/Asteriski_logo.svg) 0 no-repeat;
        -webkit-mask-size: cover;
        mask: url(src/lib/assets/Asteriski_logo.svg) 0 no-repeat;
        mask-size: cover;
        img {
            width: 100%;  
        }
    }
</style>