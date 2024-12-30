<script>
    export let id = 'sillis';
    export let lang = 'fi';
</script>
<section id={id} class="forest-bg">
    <div class="wrap">
        <div class="flex column">
            <div class="flex-item six">
                <h2>{lang === 'fi' ? 'Sillis' : 'Herring breakfast'}</h2>
                <p>
                {#if lang === 'fi'}
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                {:else}
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                    TÄSSÄ TIETOA SILLIKSESTÄ
                {/if}
                </p>
            </div>
        </div>
    </div>
</section>
<style lang="scss">
    @use '../../style/variables' as v;
    section {
        min-height: 500px;
        display: flex;
        align-items: center;
        .flex-item {
            background-color: rgba(255, 255, 255, 0.5);
            padding: 10px;
            border-radius: 5px;
            margin: auto;
            width: 100%;
            max-width: 800px;
        }
    }
    @include v.sm {
        h2 {
            line-height: 50px;
        }
    }
</style>