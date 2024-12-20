<script>
    export let img;
</script>

{#if img}

    <div class="image">
        <img src="{img}" alt="logo">
    </div>

{/if}


<style lang="scss">
    @use '../../style/variables' as v;
    .image {
        padding: 20px;
        width: calc(100% - 40px);
        aspect-ratio: 1 / 1;
        -webkit-mask: url(v.$mask) 50% 0 no-repeat;
        -webkit-mask-size: contain;
        mask: url(v.$mask) 50% 0 no-repeat;
        mask-size: contain;
        img {
            width: 100%;
            object-fit: cover;
            height: 100%; 
        }

        @include v.ml {
            max-width: 50%;
            margin: 0 auto;
        }
        @include v.sm {
            padding: 10px;
            max-width: 50%;
            margin: 0 auto;
        }
    }
</style>