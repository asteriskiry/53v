<script>
    import MaskImage from "$lib/components/maskImage.svelte";
    export let img;
    export let lang = 'fi';
    export let mask = false;
    export let id = 'info';
    export let background = true;
</script>

<section id="{id}" class="info {background ? 'flower-bg' : ''}">
    <div class="wrap">
        <div class="content padded">
            <div class="flex">
                <div class="flex-item six center">
                    <div class="has-image">
                    {#if img}
                        {#if mask}
                            <MaskImage {img}/>
                        {:else}
                            <div class="image">
                                <img src="{img}" alt="logo">
                            </div>
                        {/if}
                    {/if}
                    </div>
                </div>
                <div class="flex-item six center">
                    <div class="has-text">
                        {#if lang === 'fi'}
                        <h2>Tietoa</h2>
                        <p>
                            Asteriski ry:n 53-vuotisjuhlia juhlitaan juhlavasti perjantaina 7. maaliskuuta 2025. Vuosijuhlat alkavat cocktail-tilaisuudella, joka järjestetään Turun Akatemiatalolla. Vuosijuhlien pääjuhla järjestetään Turun Akatemiatalon juhlasalissa. Juhlien jatkoja vietetään salaisessa jatkopaikassa.
                            
                            Silliaamiaista eli sillistä nautitaan juhlien seuraavana päivänä lauantaina 8. maaliskuuta. Jatkojen tapaan myös sillis järjestetään salaisessa paikassa.
                            
                            Jatkoilla saatetaan käyttää vilkkuvia valoja.
                            
                            Vuosijuhlien pukukoodina toimii juhlapuku tai tumma puku sekä akateemiset kunniamerkit. <a href="#etiquette">Lisätietoa vuosijuhlien etiketistä</a>.
                        </p>
                        {:else}
                        <h2>Information</h2>
                        <p>
                            Asteriski ry celebrates its 53rd anniversary with a grand annual ball on Friday 7th of March 2025. The annual ball begins with a cocktail party at the Old Academy Building. The cocktail party is followed by the main event at Old Academy Building and after that we will continue the celebration with the after party in a secret location.

                            On the following morning on Saturday 8th of March 2025 the herring breakfast will take place in a secret location.

                            Afterparty may include flashing lights.

                            The dress code at the annual ball is a white tie or dark lounge suit for men and an evening gown for women as well as academic decorations.
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