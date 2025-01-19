<script>
    export let lang = 'fi';
    export let id = 'etiquette';
    export let background = true;
</script>

<section id="{id}" class="info {background ? 'flower-bg' : ''}">
    <div class="wrap">
        <div class="content padded">
            <div class="flex flex-column">
                <div class="flex-item six">
                    <h2>{lang === 'fi' ? 'Etiketti' : 'Etiquette'}</h2>
                </div>
                <div class="flex-item twelve">
                    <div class="has-text">
                        {#if lang === 'fi'}
                        <h3>Pukukoodi</h3>
                        <p>
                            Pukukoodina vuosijuhlissa toimii juhlapuku sekä akateemiset kunniamerkit. Juhlapuku tarkoittaa frakkia tai täyspitkää iltapukua tai täyspitkää juhlamekkoa. Frakin voi myös korvata hillityllä tummalla puvulla. Tällöin tumman puvun kanssa on sopiva käyttää valkoista paitaa sekä vaaleaa tai helmiäistä yksiväristä solmiota. 

Iltapukua tai juhlamekkoa käytettäessä vain kengän kärjet saavat näkyä. Laukkuna tulee toimia olkaimeton ja siro laukku. Pääjuhlassa lippujen läsnäollessa hartioiden tulisi myös olla peitettynä esimerkiksi hartiahuivilla. Hansikkaita voi halutessaan käyttää muuten kuin ruokaillessa. 

Vuosijuhlilla käytetään akateemisiksi kunniamerkeiksi määriteltyjä nauhoja ja merkkejä, jotka kuuluvat perinteisesti vuosijuhla-asuun, kuten Asteriskin jäsennauhaa. Nauhoja ja merkkejä kannetaan ne myöntäneen tahon ohjeiden mukaan. 

Eeppiselle silliaamiaiselle päälle pantavaksi kannattaa varata taikametsäteeman mukaista huomattavasti rennompaa vaatetusta. Mitä rennompi ja taikaisempi, sen parempi! Haalarit toimivat myös aina.
                        </p>
                        {:else}
                        <h3>Dresscode</h3>
                        <p>
                            The dress code at the annual ball is a white tie or an evening gown with academic medals or ribbons. 

Evening gown should be full length, the hemline going under the ankles. Handbag should be strapless and fit the occasion. Shoulders should be covered during the main event. Gloves can be worn but not during dinner. A dark lounge suit is also sufficient and it refers to a black suit with a white shirt and a light-colored tie. 

Academic decorations, such as medals and ribbons, are traditionally part of the annual party attire. Decorations should be worn according to the recommendations of the organization that bestowed them. 

In our epic herring breakfast the dress code is much more casual. Dress according to the magic forest theme, the more chill and sillier the better! Or just come in your overalls. That’s good too.
                        </p>
                        {/if}
                    </div>
                </div>
                <div class="flex-item twelve">
                    <div class="has-text">
                        {#if lang === 'fi'}
                        <h3>Vinkkejä käyttäytymiseen</h3>
                        <p>
                            Pukukoodina vuosijuhlissa toimii juhlapuku sekä akateemiset kunniamerkit. Juhlapuku tarkoittaa frakkia tai täyspitkää iltapukua tai täyspitkää juhlamekkoa. Frakin voi myös korvata hillityllä tummalla puvulla. Tällöin tumman puvun kanssa on sopiva käyttää valkoista paitaa sekä vaaleaa tai helmiäistä yksiväristä solmiota. 

Iltapukua tai juhlamekkoa käytettäessä vain kengän kärjet saavat näkyä. Laukkuna tulee toimia olkaimeton ja siro laukku. Pääjuhlassa lippujen läsnäollessa hartioiden tulisi myös olla peitettynä esimerkiksi hartiahuivilla. Hansikkaita voi halutessaan käyttää muuten kuin ruokaillessa. 

Vuosijuhlilla käytetään akateemisiksi kunniamerkeiksi määriteltyjä nauhoja ja merkkejä, jotka kuuluvat perinteisesti vuosijuhla-asuun, kuten Asteriskin jäsennauhaa. Nauhoja ja merkkejä kannetaan ne myöntäneen tahon ohjeiden mukaan. 

Eeppiselle silliaamiaiselle päälle pantavaksi kannattaa varata taikametsäteeman mukaista huomattavasti rennompaa vaatetusta. Mitä rennompi ja taikaisempi, sen parempi! Haalarit toimivat myös aina.
                        </p>
                        {:else}
                        <h3>Information</h3>
                        <p>
                            The annual ball is a prestigious event, and you are expected to follow proper manners. Toastmaster’s and song master’s speeches should be followed quietly and attentively. However, outside the official program socializing with your tableside company is encouraged throughout the event. Guest speeches are saved for the dedicated slot in the official program and you may request permission from the toastmaster during scheduled breaks. Songs can also be requested from the song master during breaks only. Songs always start from silence and lyrics follow given songbooks; no extra verses are sung during the main event. 

You may leave your table freely during the scheduled breaks. Otherwise, it’s polite to request permission from your closest tableside company. Don’t move during songs or speeches. 

Toasting is done after each song. Toast by lifting your glass and nodding towards the person you are toasting, preferably making eye contact. Start by toasting with the person across your right side, then left across you, and then straight in front of you. Never toast with an empty glass.
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
    .flex-item {
        max-width: 800px;
    }

    .twelve {
        position: relative;
        p {
            white-space: pre-wrap;
        }
        &:after {
            content: "";
            width: 100%;
            background-color: v.$riski-yellow;
            height: 1px;
            position: absolute;
            bottom: 0%;
            left: 0;
        }
        &:last-of-type {
            &:after {
                display: none;
            }
        }
    }

</style>