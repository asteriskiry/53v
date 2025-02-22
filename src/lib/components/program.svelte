<script>
    import reaktor from "$lib/assets/reaktor.svg";
    import mankeli from "$lib/assets/mankeli_solutions.svg";
    import tmk  from "$lib/assets/TMK_logo.jpg";
    export let lang = 'fi';
    export let id = 'program';
    export let title = {
        fi: 'Ohjelma',
        en: 'The program'
    }
    export let texts = [
        {
            fi: {
                left: [
                    'Cocktail-tilaisuus', 
                    'Pääjuhlaa edeltää cocktail-tilaisuus, joka pidetään Akatemiatalolla Konsistorin salissa (Rothoviuksenkatu 1, 20500 Turku) kello 16.00 alkaen. Cocktail-tilaisuuden ohjelmaan kuuluu tervetuliaismalja sekä kutsuvieraiden esittämät tervehdykset Asteriskille. Cocktail-tilaisuudesta kuljetukset alakertaan tulee järjestää itse.'
                ],
                right: 'Cocktail-tilaisuudessa mukana:'
            },
            en: {
                left: [
                    'Cocktail party', 
                    ''
                ],
                right: 'Cocktail party sponsor:'
            },
            imgs: [
                {href:'https://www.mankelisolutions.fi/', src: mankeli, alt: 'Mankeli Solutions logo'}
            ]
        },
        {
            fi: {
                left: [
                    'Pääjuhla',
                    'Asteriskin 53-vuotisjuhlien pääjuhlaa vietetään Akatemiatalon juhlasalissa (Rothoviuksenkatu 1, 20500 Turku). Ovet tilaisuuteen avataan klo 17:30 ja itse pääjuhla alkaa klo 18:00. Juhlassa kunnioitamme rakasta ainejärjestöämme puhein ja tervehdyksin. Lisäksi nautimme kolmen ruokalajin illallisen ja jaamme tunnustuksia henkilöille, jotka ovat olleet vuosien varrella mukana rakentamasta Asteriskista sellaisen kuin se tänä päivänä on. Pääjuhlan päätyttyä tanssitaan akateemiset tanssit.'
                ],
                right: 'Pääjuhlassa mukana:'
            },
            en: {
                left: [
                    'Main event', 
                    ''
                ],
                right: 'Main event sponsor:'
            },
            imgs: [
                {href:'https://www.reaktor.com/', src: reaktor, alt: 'Reaktor logo'}
            ]
        },
        {
            fi: {
                left: [
                    'Jatkot',
                    'Pääjuhlan loputtua vieraat kuljetetaan salaiseen jatkopaikkaan.'
                ],
                right: 'Jatkoilla mukana:'
            },
            en: {
                left: [
                    'After party', 
                    ''
                ],
                right: 'After party sponsor:'
            },
        },
        {
            fi: {
                left: [
                    'Sillis',
                    'Meininki ei suinkaan lopu pääjuhlan ja jatkojen jälkeen, vaan lauantaina 8.3. koittaa taikametsäteemainen silliaamiainen! Silliksellä on tarjolla ruokaa, naposteltavaa sekä juomista. Kaiken tämän lisäksi sauna (ja palju) on kuumana, joten nappaa mukaasi myös uimapuku, pyyhe ja peseytymisvermeet. Huom. uimapuku on sauna- ja pesutiloissa pakollinen! Sillikselle voit pukeutua halutessasi teeman mukaan tai rentoihin vaatteisiin, esimerkiksi haalareihin. \n\nSillikselle on yhteiskuljetukset. Bussit lähtevät lauantaina 8.3. klo 12.00 ja 12.45. Proffan kellarin edestä. Olethan ajoissa paikalla, sillä bussit eivät odota! Kuljetukset takaisin sillikseltä Proffaan ovat perillä noin klo 19.45 ja 20.30.'
                ],
                right: 'Silliksellä mukana:'
            },
            en: {
                left: [
                    'Herring Breakfast', 
                    ''
                ],
                right: 'Herring Breakfast sponsor:'
            },
            imgs: [
                {href:'https://www.mittausjakalibrointipalvelu.fi/', src: tmk, alt: 'TMK logo'}
            ]
        },
    ];
</script>
<section id="{id}" class="program riski-bg">
<div class="wrap">
    <div class="content padded">
        <div class="flex flex-column">
            <div class="flex-item six has-title">
                <h2>{lang === 'fi' ? title.fi : title.en}</h2>
            </div>
        {#each texts as text}
            <div class="flex flex-item twelve">
                <div class="flex-item six has-text {text.imgs ? '' : 'no-imgs'}">
                    <h3>{lang === 'fi' ? text.fi.left[0] : text.en.left[0]}</h3>
                    <p>
                        {lang === 'fi' ? text.fi.left[1] : text.en.left[1]}
                    </p>
                    {#if lang === 'fi' && text.fi?.tmk === true}
                    <p>
                        <b>Tarjoamamme mittauspalvelu pähkinänkuoressa</b>

Suoritamme parhaalla ja tarkoituksenmukaisimmalla, saatavissa olevalla mittauskalustolla ja ohjelmistoilla <b>3D-mittauksia, linjauksia ja tilavuusmittauksia</b>, kuten erilaisten koneistettujen kappaleiden <b>mittatarkastuksia, säiliöiden tilavuuskalibrointeja ja geometrisia määrityksiä, pyörivien laitteiden ja kappaleiden tarkastuksia</b> (mm. rumpuja, pulppereita, uuneja jne.) sekä <b>teräsrakenteiden tarkastuksia ja -asennuksia.</b> Lisäksi <b>vesivoimalat</b> ovat yksi merkittävä palveluidemme käyttäjä.

Toimimme koko Suomen alueella, Pohjoismaissa ja Baltian alueella tarjoten mittauspalvelut moninaiselle joukolle asiakkaita aina pienistä konepajoista avaruustekniikan tuottajiin. Tarvittaessa kauttamme saat myös asennus-, säätöja korjauspalvelun laitteillenne (mm. pyörivien uunien ja rumpujen säätö- ja korjauspalvelu, on-sitekoneistuspalvelut).
                    </p>
                    <ul>
                        <li>Turbiinien ja generaattorien linjaukset</li>
                        <li>Turbiinipetien on-site-koneistusmittaukset</li>
                        <li>Koneistetut kappaleet</li>
                        <li>Hitsatut teräsrakenteet</li>
                        <li>Pyörivät myllyt, rummut ja uunit (tarkastus, säätö ja korjaus)</li>
                        <li>Säiliöiden tilavuus- ja geometriamittaukset (mm. pystyasentoiset lieriösäiliöt, makaavat
                            "sikari" säiliöt, pallosäiliöt) ja laskennat</li>
                        <li>Koneiden- ja laitteiden asennus- ja tarkastusmittaukset</li>
                        <li>Ilmailu-, avaruus- ja ajoneuvoteollisuuden jigien ja tuotteiden tarkastus- ja asennusmittaukset</li>
                        <li>Asennusvalvontaa</li>
                        <li>Kohteiden 3D-skannaukset</li>
                        <li>Vesivoimalaitteiden tarkastus- ja asennusmittaukset.</li>
                    </ul>
                    {/if}
                </div>
                {#if text.imgs}
                <div class="flex-item four has-sponsors">
                    {#if text[lang]?.right}
                    <h3>
                        {text[lang].right}
                    </h3>
                    {/if}
                    <div class="sponsors flex">
                        {#each text?.imgs as img}
                        <div class="flex-item six">
                            <a href={img.href} target="_blank">
                                <img src="{img.src}" alt="{img.alt}">
                            </a>
                        </div>
                        {/each}
                    </div>
                </div>
                {/if}
            </div>
        {/each}
        </div>
    </div>
</div>
</section>

<style lang="scss">
    @use '../../style/variables' as v;
    section {
        background-color: v.$riski-green-dark;
        color: v.$font-color-light;
        position: relative;
        padding: 80px 0;
        &:before {
            background-color: v.$riski-green-light;
        }
        @include v.ml {
            padding: 40px 0;
        }
        p {
            white-space: pre-wrap;
        }
    }

    .sponsors {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;
        @include v.ml {
            align-items: flex-start;
        }
        .flex-item {
            
            &.six {
                width: 100%;
                &:last-of-type {
                    margin-top: 10px
                }
                &:first-of-type {
                    margin-top: 0px
                }
            }
            a {
                display: flex;
                justify-content: center;
                height: 100px;
                
                img {
                    width: 100%;
                    object-fit: contain;
                    object-position: 50% 50%;
                    &:hover {
                        transform: scale(1.2);
                    }
                }
            }
        }  
    }

    .flex-item {
        &.has-title {
            margin-left: -8px;
        }
        &.twelve {
            padding: 20px 0;
        }
        &.no-imgs {
            width: 100%;
            max-width: 800px;
        }
    }

    .flex-column .flex-item.twelve {
        position: relative;
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