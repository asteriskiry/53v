<script>
    import Banner from "$lib/components/banner2.svelte";
    import Info from "$lib/components/info.svelte";
    import Program from "$lib/components/program.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Posts from "$lib/components/posts.svelte";
    import Menu from "$lib/components/menu.svelte";
    import Sillis from "$lib/components/sillis.svelte";
    import Logofarm from "$lib/components/logofarm.svelte";
    import infoImg from "$lib/assets/vuju.jpg"
    import reaktor from "$lib/assets/reaktor.svg";
    export let data;

    let etiquette = [
        {
            fi: {
                left: [
                    'Pukukoodi', 
                    "Pukukoodina vuosijuhlissa toimii juhlapuku sekä akateemiset kunniamerkit. \n\nJuhlapuku tarkoittaa frakkia. Frakin voi myös korvata hillityllä tummalla puvulla. Tällöin tumman puvun kanssa tulee käyttää valkoista paitaa sekä vaaleaa tai helmiäistä yksiväristä solmiota. \n\nTäyspitkää ilta- tai juhlapukua käytettäessä vain kengän kärjet saavat näkyä. Laukkuna tulee toimia olkaimeton ja siro laukku. Pääjuhlassa lippujen läsnäollessa hartioiden tulisi myös olla peitettynä esimerkiksi hartiahuivilla. Hansikkaita voi halutessaan käyttää muuten kuin ruokaillessa. \n\nVuosijuhlilla käytetään akateemisiksi kunniamerkeiksi määriteltyjä nauhoja ja merkkejä, jotka kuuluvat perinteisesti vuosijuhla-asuun. Kunnianauhaa kannetaan oikealta olkapäältä rinnan yli viistoon vasemmalle. Kunnianauhaa voi kantaa myös ruusukkeena vasemmassa rintapielessä. Nauha ei saa koskettaa paljasta ihoa. Juhlapuvun kanssa nauhaa kannetaan liivin alla. Nauhoista arvokkainta tai suurinta organisaatiota edustavaa kannetaan ylimpänä (esimerkiksi TYYn kuntanauha ylimpänä). Asteriskin jäsennauhaa tulee kantaa keltainen väri ylempänä. Kunniamerkkejä kannetaan ne myöntäneen tahon ohjeiden mukaan esimerkiksi nauhassa tai puvun vasemmassa rintapielessä. Asteriskin jäsennauhaa ei tule käyttää samaa aikaa Asteriskin kunnianauhan, ansionauhan ja ansiomerkin kanssa. Kunniamerkkien kanssa ei käytetä frakin taskuliinaa. \n\nEeppiselle silliaamiaiselle päälle pantavaksi kannattaa varata taikametsäteeman mukaista huomattavasti rennompaa vaatetusta. Mitä rennompi ja taikaisempi, sen parempi! Haalarit toimivat myös aina."
                ],
                right: ''
            },
            en: {
                left: [
                    'Dresscode', 
                    'The dress code at the annual ball is a white tie or an evening gown with academic medals or ribbons. \n\nEvening gown should be full length, the hemline going under the ankles. Handbag should be strapless and fit the occasion. Shoulders should be covered during the main event. Gloves can be worn but not during dinner. A dark lounge suit is also sufficient and it refers to a black suit with a white shirt and a light-colored tie. \n\nAcademic decorations, such as medals and ribbons, are traditionally part of the annual party attire. \n\nHonorary ribbons are worn over the right shoulder across your chest to the left. In a suit they go under the vest. When wearing a tie, the honorary ribbon should go in front of the tie. Honorary ribbons can also be folded into a rosette to be attached to your left lapel. They should not be in touch with the skin. The decoration of the highest value or representing the biggest organization should be placed on the top (for example student union TYY’s ribbon should be first of the decorations). \n\nMember ribbon is worn yellow stripe on upwards. Decorations should be worn according to the recommendations of the organization that bestowed them. Asteriski member ribbon should not be used at the same time as Asteriski honorary ribbon, ribbon of praise, and medal of praise. A white tie is not accessorized with a handkerchief while wearing decorations. \n\nIn our epic herring breakfast the dress code is much more casual. Dress according to the magic forest theme, the more chill and sillier the better! Or just come in your overalls. That’s good too.'
                ],
                right: ''
            },
            
        },
        {
            fi: {
                left: [
                    'Vinkkejä käyttäytymiseen', 
                    'Perinteiset hyvät käytöstavat toimivat oikein hyvin myös vuosijuhlilla. Keskustelu on suotavaa koko juhlan ajan lukuunottamatta ohjelmanumeroita sekä juhlamarsalkan ja laulunjohtajien puheita, jolloin juhlaväen tulee olla hiljaa. Juhlavieraiden ei ole suotavaa pyytää puheenvuoroa kesken juhlan, vaan juhlavieraiden puheenvuorot jätetään vapaaseen sanaan. Vapaan sanan puheenvuoroja voit käydä pyytämässä taukojen aikana juhlamarsalkalta. Laulutoiveita voit puolestaan käydä esittämässä vain taukojen aikana laulunjohtajille. Laulu lähtee aina hiljaisuudesta ja lauluihin ei ole suotavaa laulaa lauluvihkosta ulkopuolisia säkeistöjä. \n\nTaukojen aikana juhlakansa voi vapaasti nousta pöydästä. Muuten pöydästä poistumiseen on kohteliasta kysyä lupa lähimmältä pöytäseurueelta, minkä jälkeen voi huomaamatta poistua juhlasalista. Tarpeetonta liikennettä ei kuitenkaan pitäisi tapahtua laulujen tai ohjelmanumeroiden aikana. \n\nMyös vuosijuhlassa jokaisen laulun jälkeen kohotetaan malja. Skoolattaessa laseja ei kilistellä yhteen. Skoolaustoveria on kohteliasta katsoa silmiin skoolauksen aikana. Ensin skoolataan viistosti istuvan kanssa aloittaen oikealle, tämän jälkeen viistosti vasempaan ja lopuksi edessä istuvan kanssa. Tyhjällä lasilla ei tule skoolata.'
                ],
                right: ''
            },
            en: {
                left: [
                    'Manners', 
                    'The annual ball is a prestigious event, and you are expected to follow proper manners. Toastmaster’s and song master’s speeches should be followed quietly and attentively. However, outside the official program socializing with your tableside company is encouraged throughout the event. Guest speeches are saved for the dedicated slot in the official program and you may request permission from the toastmaster during scheduled breaks. Songs can also be requested from the song master during breaks only. Songs always start from silence and lyrics follow given songbooks; no extra verses are sung during the main event. \n\nYou may leave your table freely during the scheduled breaks. Otherwise, it’s polite to request permission from your closest tableside company. Don’t move during songs or speeches. \n\n Toasting is done after each song. Toast by lifting your glass and nodding towards the person you are toasting, preferably making eye contact. Start by toasting with the person across your right side, then left across you, and then straight in front of you. Never toast with an empty glass.'
                ],
                right: ''
            },
            
        }
    ];
    let etiquetteTitle = {
        fi: 'Etiketti',
        en: 'Etiquette'
    };

    let sponsorIntroduction = [
        {
            fi: {
                left: [
                    'Reaktor', 
                    "Reaktor on kansainvälisesti arvostettu teknologiayritys, joka suunnittelee ja rakentaa huippuluokan digitaalisia tuotteita ja palveluita yhteistyössä maailman johtavien brändien kanssa.\n\nVuonna 2000 perustettu yritys tunnetaan tinkimättömästä laadusta, luovasta ongelmanratkaisusta ja syvällisestä teknologiaymmärryksestä. Reaktorilla on yli 700 asiantuntijaa, jotka työskentelevät kahdeksassa toimistossa ympäri maailmaa – Helsingissä, Turussa, Tampereella, New Yorkissa, Amsterdamissa, Lissabonissa, Tukholmassa ja Tokiossa. Asiakaskuntaan kuuluu ikonisia nimiä, kuten Adidas, HBO, Supercell, Cathay Pacific ja KONE, joiden kanssa Reaktor on luonut uraauurtavia ratkaisuja ja monia \"maailman ensimmäisiä\".\n\nReaktorilla osaajat eivät pelkästään seuraa teknologian kehitystä, vaan aktiivisesti rakentavat sen tulevaisuutta."
                ],
                right: ''
            },
            en: {
                left: [
                    'Sponsor introduction',
                ],
                right: ''
            },
            imgs: [
                {href:'https://www.reaktor.com/', src: reaktor, alt: 'Reaktor logo'}
            ]
        },
    ];
</script>
<Banner/>
<Program/>
<Info mask={true} img={infoImg}/>
<Posts posts={data.posts}/>
<Menu/>
<Program title={etiquetteTitle} texts={etiquette} id={'etiquette'}/>
<Sillis />
<Program title={{fi: 'Yritysesittely'}} texts={sponsorIntroduction} id={'sponsor-introduction'} />
<Logofarm />
<Footer/>
