<script>
    import logo from "$lib/assets/asteriskilogo.png";
    import reaktor from "$lib/assets/reaktor.svg";
    import mankeli from "$lib/assets/mankeli_solutions.svg";
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
                    'Pääjuhlaa edeltää cocktail-tilaisuus, joka pidetään Turun yliopiston päärakennuksessa (Henrikinkatu 2, 20500 Turku) kello 14.30 alkaen. Cocktail-tilaisuuden ohjelmaan kuuluu tervetuliaismalja, cocktailpalat sekä kutsuvieraiden esittämät tervehdykset Asteriskille. Kaikki vuosijuhlaosallistujat ovat tervetulleita seuraamaan tilaisuutta. Cocktail-tilaisuudesta lähtee kuljetukset itse pääjuhlaan klo 17.00 osoitteesta Naturankuja. Voit myös saapua suoraan pääjuhlaan.'],
                right: 'Cocktail-tilaisuudessa mukana:'
            },
            en: {
                left: [
                    'Cocktail party', 
                    'text'
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
                    'Asteriskin 50-vuotisjuhlien pääjuhlaa vietetään Turun VPK:n talolla (Eskelinkatu 5, 20100 Turku). Ovet tilaisuuteen avataan klo 17.00 ja itse pääjuhla alkaa klo 18:00. Juhlassa kunnioitamme rakasta ainejärjestöämme puhein ja tervehdyksin. Lisäksi nautimme kolmen ruokalajin illallisen ja jaamme tunnustuksia henkilöille, jotka ovat olleet vuosien varrella mukana rakentamasta Asteriskista sellaisen kuin se tänä päivänä on. Pääjuhlan päätyttyä tanssitaan akateemiset tanssit.'
                ],
                right: 'Pääjuhlassa mukana:'
            },
            en: {
                left: [
                    'Main event', 
                    'text'
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
                    'Pääjuhlan loputtua vieraat kuljetetaan salaiseen jatkopaikkaan. Jatkoilta on bussikuljetukset takaisin keskustaan ja yliopistolle. Kuljetukset saapuvat yliopistolle noin klo 03.00 ja 04.00.'
                ],
                right: 'Jatkoilla mukana:'
            },
            en: {
                left: [
                    'After party', 
                    'text'
                ],
                right: 'After party sponsor:'
            },
            imgs: [
                {href:'', src: logo, alt: 'logo'},
                {href:'', src: logo, alt: 'logo'}
            ]
        },
        {
            fi: {
                left: [
                    'Sillis',
                    'Pääjuhlaa ja jatkoja seuraa sunnuntaina 2. lokakuuta eeppinen sirkusteemainen silliaamiainen, jota et halua missata! Silliksellä juhlakansaa odottaa maittava aamiainen sekä olotiloja tasoittavaa juomaa. Otathan sillikselle mukaan pyyhkeen sekä uima-asun saunomista varten. Yleisen viihtyvyyden vuoksi huomioithan, että pesutiloissa on uima-asu pakko! Sillikselle kuljemme yhteisellä bussikuljetuksella sunnuntaina. Bussit sillikselle lähtevät kello 11:00 ja 12:00 osoitteesta Vesilinnantie 5. Ole ajoissa paikalla sillä bussit ei odota myöhästelijöitä! Sillistä varten kannattaa varata rento asu. Kuljetukset sillikselt yliopistolle ovat perillä noin 17.30 ja 18.30.'
                ],
                right: 'Silliksellä mukana:'
            },
            en: {
                left: [
                    'Herring Breakfast', 
                    'text'
                ],
                right: 'Herring Breakfast sponsor:'
            },
            imgs: [
                {href:'', src: logo, alt: 'logo'},
                {href:'', src: logo, alt: 'logo'}
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
                        {lang === 'fi' ? text.fi.left[1] : text.en.left[1]
                        }
                    </p>
                </div>
                {#if text.imgs}
                <div class="flex-item four has-sponsors">
                    <h3>
                        {lang === 'fi' ? text.fi.right : text.en.right}
                    </h3>
                    <div class="sponsors flex">
                        {#each text?.imgs as img}
                        <div class="flex-item six">
                            <a href={img.href}>
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

    .has-sponsors {
        margin-left: auto;
        h3 {
          text-align: center;  
        }

        @include v.ml {
            h3 {
                text-align: left;
                margin-left: 0;
            }
        }
    }

    .sponsors {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @include v.ml {
            align-items: flex-start;
        }
        .flex-item {
            
            &.six {
                width: 100%;
                &:last-of-type {
                    margin-top: 10px
                }
            }
            a {
                display: flex;
                justify-content: center;
                height: 80px;
                
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