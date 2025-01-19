<script>
    import academia from "$lib/assets/academia.png";
    import studioflair from "$lib/assets/studioflair.jpg";
    export let lang = 'fi';
    export let id = 'offers';
    
</script>
<section id="{id}" class="program riski-bg">
<div class="wrap">
    <div class="content padded">
        <div class="flex flex-column">
            <div class="flex-item six has-title">
                <h2>{lang === 'fi' ? 'Tarjoukset' : 'Offers'}</h2>
            </div>
            <div class="flex flex-item twelve">
                <div class="flex-item six has-text">
                    <h3>Studio Flair</h3>
                    <p>
                        Studio Flair (Hämeentie 20, 20540 Turku) tarjoaa vuosijuhlaviikolla 3.-7.3. juhlakampauksista sekä muista kampaamo- ja parturipalveluistaan -10%. 
                        
Alennuksen saat käyttöösi antamalla varauksen yhteydessä koodin "Juhla53". 
                        
Ajanvarauksen voi hoitaa paikanpäällä, somekanavien kautta, <a href="https://www.studioflair.fi/ajanvaraus" target="_blank">nettiajanvarauksesta</a>, puhelimitse <a href="tel:0442724803">044 272 4803</a> tai sähköpostitse <a href="mail:studioflair20@gmail.com">studioflair20@gmail.com</a>.
                    </p>
                </div>
                <div class="flex-item four has-sponsors">
                    <div class="sponsors flex">
                        <div class="flex-item six">
                            <a href="https://www.studioflair.fi/" target="_blank" class="flair">
                                <img src="{studioflair}" alt="Studio flair logo">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-item twelve">
                <div class="flex-item six has-text">
                    <h3>Studio Flair</h3>
                    <p>
                        Hei vuosijuhliin osallistujat!

Academia toimii vuosijuhlien yhteistyökumppanina ja tarjoaa kaikille juhlaan osallistuville laadukkaan frakin vuokrauksen 149 euron hintaan (norm. 179 €), sekä lakerikenkien vuokrauksen hintaan 35-40 € (norm. 45 €).

Yhteistyötarjouksena on myös mahdollista lunastaa vuokraamasi frakki omaksi, -20%:n alennuksella. Norm. hinta 750 € (uutena 1050 €). 

Frakkien sovitukset järjestetään hyvissä ajoin ennen vuosijuhlia, tarkemmasta ajankohdasta infotaan lähempänä, ilmoittautumisen jälkeen. Frakin voi tilata myös mittojen mukaan toimitettuna ilman sovitusta. Lisätietoa löydät lomakkeelta.

Pääset ilmoittautumaan sovituspäivään tai varaamaan frakin mittojen mukaan tästä <a href="https://docs.google.com/forms/d/e/1FAIpQLScm_UYrXKq5yLaxrp3s_OWMXzX7f60t9YuUzYoSu6Za4JTkOw/viewform?usp=header" target="_blank">linkistä</a>. 
                    </p>
                </div>
                <div class="flex-item four has-sponsors">
                    <div class="sponsors flex">
                        <div class="flex-item six">
                            <a href="https://www.pukuvuokraamoacademia.fi/" target="_blank" class="flair">
                                <img src="{academia}" alt="Academia logo">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
        a {
            color: white
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
                height: 80px;
                img {
                    width: 100%;
                    object-fit: contain;
                    object-position: 50% 50%;
                    &:hover {
                        transform: scale(1.2);
                    }
                }
                &.flair {
                    height: 200px;
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