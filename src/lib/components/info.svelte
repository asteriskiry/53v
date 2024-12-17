<script>
    import MaskImage from "$lib/components/maskImage.svelte";
    import img from "$lib/assets/vuju.jpg";
    export let lang = 'fi';
    export let mask = false;
</script>

<section class="info flower-bg">
    <div class="wrap">
        <div class="content padded">
            <div class="flex">
                <div class="flex-item six center">
                    <div class="has-image">
                        {#if mask}
                            <MaskImage {img}/>
                        {:else}
                            <div class="image">
                                <img src="{img}" alt="logo">
                            </div>
                        {/if}
                    </div>
                </div>
                <div class="flex-item six center">
                    <div class="has-text">
                        {#if lang === 'fi'}
                        <h2>Tietoa</h2>
                        <p>
                            Asteriski ry:n 50-vuotisjuhlia juhlitaan juhlavasti lauantaina 1. lokakuuta 2022. Vuosijuhlat alkavat cocktail-tilaisuudella, joka järjestetään Turun yliopiston päärakennuksessa. Cocktail-tilaisuudesta siirrymme itse pääjuhlaan Turun VPK-talolle. Juhlien jatkoja vietetään salaisessa jatkopaikassa.
                            
                            Silliaamiaista eli sillistä nautitaan juhlien seuraavana päivänä sunnuntaina 2. lokakuuta. Jatkojen tapaan myös sillis järjestetään salaisessa paikassa.
                            
                            Vuosijuhlat järjestetään esteettömissä tiloissa. Jatkoilla saatetaan käyttää vilkkuvia valoja.
                            
                            Vuosijuhlien pukukoodina toimii juhlapuku tai tumma puku sekä akateemiset kunniamerkit. Lisätietoa vuosijuhlien etiketistä.
                        </p>
                        {:else}
                        <p>
                            enklantua
                        </p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '../../style/variables' as v;
    .flex-item.six.center {
        display: flex;
        align-self: center;
    }

</style>