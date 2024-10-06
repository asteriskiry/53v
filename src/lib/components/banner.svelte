<script>
    import logo from "$lib/assets/asteriskilogo.png";
    export let lang = 'fi';
</script>
<section class="banner">
<div class="no wrap">
    <div class="content padded">
        <div class="flex">
            <div class="flex-item three">
                <div class="has-image">
                    <img src="{logo}" alt="vuosijuhlalogo">
                </div>
            </div>
            <div class="flex-item six">
                <div class="has-text">
                    {#if lang === 'fi' && false}
                    <p>
                        Tervetuloa juhlistamaan rakkaan ainejärjestömme Asteriski ry:n 50-vuotista taivalta lauantaina 1. lokakuuta 2022 vuosijuhlien merkeissä. Ennen vuosijuhlia järjestetään vuosijuhlaviikko 26.-30.9.2022, lisätietoa vuosijuhlaviikosta.
                    </p>
                    {:else}
                    <p>
                        Soon 
                    </p>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<style lang="scss">
    .flex {
        flex-direction: column;
        align-items: center;
        .has-image {
            display: flex;
            justify-content: center;
        }
        .has-text {
            text-align: center;
        }
    }
</style>