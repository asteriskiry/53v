<script>
    import logo from "$lib/assets/asteriskilogo.png";
    export let lang = 'fi';
</script>
<section class="program">
<div class="wrap">
    <div class="content padded">
        <div class="flex">
            <div class="flex-item twelve">
                <h2>{lang === 'fi' ? 'OHJELMA' : 'THE PROGRAM'}</h2>
            </div>
            <div class="flex-item six">
                <div class="flex-item twelve">
                    <div class="has-text">
                        <h3>{lang === 'fi' ? 'Cocktail-tilaisuus' : 'Cocktail party'}</h3>
                        <p>
                            {lang === 'fi' ? 
                                'Pääjuhlaa edeltää cocktail-tilaisuus, joka pidetään Turun yliopiston päärakennuksessa (Henrikinkatu 2, 20500 Turku) kello 14.30 alkaen. Cocktail-tilaisuuden ohjelmaan kuuluu tervetuliaismalja, cocktailpalat sekä kutsuvieraiden esittämät tervehdykset Asteriskille. Kaikki vuosijuhlaosallistujat ovat tervetulleita seuraamaan tilaisuutta. Cocktail-tilaisuudesta lähtee kuljetukset itse pääjuhlaan klo 17.00 osoitteesta Naturankuja. Voit myös saapua suoraan pääjuhlaan.' : 
                                'THE PROGRAM'
                            }
                        </p>
                    </div>
                    <div class="has-sponsors">
                        <p class="bold">
                            {lang === 'fi' ? 'Cocktail-tilaisuussa mukana:' : 'Cocktail party:'}
                        </p>
                        <div class="sponsors flex">
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-item six">
                <div class="flex-item twelve">
                    <div class="has-text">
                        <h3>{lang === 'fi' ? 'Pääjuhla' : 'Main event'}</h3>
                        <p>
                            {lang === 'fi' ? 
                                'Asteriskin 50-vuotisjuhlien pääjuhlaa vietetään Turun VPK:n talolla (Eskelinkatu 5, 20100 Turku). Ovet tilaisuuteen avataan klo 17.00 ja itse pääjuhla alkaa klo 18:00. Juhlassa kunnioitamme rakasta ainejärjestöämme puhein ja tervehdyksin. Lisäksi nautimme kolmen ruokalajin illallisen ja jaamme tunnustuksia henkilöille, jotka ovat olleet vuosien varrella mukana rakentamasta Asteriskista sellaisen kuin se tänä päivänä on. Pääjuhlan päätyttyä tanssitaan akateemiset tanssit.' : 
                                'THE PROGRAM'
                            }
                        </p>
                    </div>
                    <div class="has-sponsors">
                        <p class="bold">
                            {lang === 'fi' ? 'Pääjuhlassa mukana:' : 'Cocktail party:'}
                        </p>
                        <div class="sponsors flex">
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-item six">
                <div class="flex-item twelve">
                    <div class="has-text">
                        <h3>{lang === 'fi' ? 'Jatkot' : 'Cocktail party'}</h3>
                        <p>
                            {lang === 'fi' ? 
                                'Pääjuhlan loputtua vieraat kuljetetaan salaiseen jatkopaikkaan. Jatkoilta on bussikuljetukset takaisin keskustaan ja yliopistolle. Kuljetukset saapuvat yliopistolle noin klo 03.00 ja 04.00.' : 
                                'THE PROGRAM'
                            }
                        </p>
                    </div>
                    <div class="has-sponsors">
                        <p class="bold">
                            {lang === 'fi' ? 'Jatkoilla mukana:' : 'Cocktail party:'}
                        </p>
                        <div class="sponsors flex">
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-item six">
                <div class="flex-item twelve"> 
                    <div class="has-text">
                        <h3>{lang === 'fi' ? 'Sillis' : 'Cocktail party'}</h3>
                            {#if lang === 'fi'}
                                <p>
                                    Pääjuhlaa ja jatkoja seuraa sunnuntaina 2. lokakuuta eeppinen sirkusteemainen silliaamiainen, jota et halua missata!
                                </p>
                                    Silliksellä juhlakansaa odottaa maittava aamiainen sekä olotiloja tasoittavaa juomaa. Otathan sillikselle mukaan pyyhkeen sekä uima-asun saunomista varten. Yleisen viihtyvyyden vuoksi huomioithan, että pesutiloissa on uima-asu pakko!
                                <p>
                                    Sillikselle kuljemme yhteisellä bussikuljetuksella sunnuntaina. Bussit sillikselle lähtevät kello 11:00 ja 12:00 osoitteesta Vesilinnantie 5. Ole ajoissa paikalla sillä bussit ei odota myöhästelijöitä! Sillistä varten kannattaa varata rento asu. Kuljetukset sillikselt yliopistolle ovat perillä noin 17.30 ja 18.30.
                                </p>
                            {:else}
                                THE PROGRAM
                            {/if}
                    </div>
                    <div class="has-sponsors">
                        <p class="bold">
                            {lang === 'fi' ? 'Jatkoilla mukana:' : 'Cocktail party:'}
                        </p>
                        <div class="sponsors flex">
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                            <div class="flex-item four">
                                <a href="">
                                    <img src="{logo}" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<style lang="scss">
    .flex {
        flex-direction: column;
        .has-sponsors {
            .sponsors {
                display: flex;
                flex-direction: row;
                .flex-item {
                    padding: 20px;
                    a {
                        display: flex;
                        justify-content: center;
                        height: 80px;
                        img {
                            object-fit: cover;
                            object-position: 50% 50%;
                        }
                    }
                }
                
            }
        }
    }
</style>