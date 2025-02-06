<script>
    import Banner from "$lib/components/banner2.svelte";
    import Info from "$lib/components/info.svelte";
    import Program from "$lib/components/program.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Posts from "$lib/components/posts.svelte";
    import Menu from "$lib/components/menu.svelte";
    import Sillis from "$lib/components/sillis.svelte";
    import Logofarm from "$lib/components/logofarm.svelte";
    import Offers from "$lib/components/offers.svelte";
    import Etiquette from "$lib/components/etiquette.svelte";
    import infoImg from "$lib/assets/vuju.jpg"
    import reaktor from "$lib/assets/reaktor.svg";
    import tmk  from "$lib/assets/TMK_logo.jpg";
    export let data;

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
        {
            fi: {
                left: [
                    'TMK Teollisuuden Mittaus- ja Kalibrointipalvelu Oy', 
                    "Ydinpalveluitamme ovat teollisuuden mittauspalvelut. Sen ohella tarjoamme kalibrointipalveluita, jota teemme vuosikymmenten kokemuksella yrityksille sekä julkisen puolen tarpeisiin. Pääasiassa palvelemme Suomessa, Pohjoismaissa ja Baltian alueilla. Tarvittaessa myös koko planeettamme alueella. Ammattitaidon ja koulutuksen ohella vuosien aikana kartutettu hiljainen tietotaito on alallamme merkittävässä asemassa, ja meiltä sitä löytyy; asiakaskuntaamme kuuluvatkin kaikenkokoiset asiakkaat aina pienistä konepajoista niin tehtaisiin, ydinvoimaloihin kuin ilmailu- ja avaruustekniikkaa tuottaviin teollisuuden ammattilaisiinkin asti. \n\n Tärkeimpiä perusperiaatteitamme on, että toimimme aina ns. kolmannen osapuolen asiantuntijana, täysin puolueettomasti ja riippumattomasti. Voit siis todella luottaa raportoimiimme mittaustuloksiin, ja laatia sekä toteuttaa tarvittavat toimenpiteet meiltä saatujen mittaustulosten perusteella. Olemme alan kokeneimpia toimijoita, joilta teollisuuden mittauspalvelu sujuu aina luotettavasti, tarkasti ja ammattitaidolla. Joustavuus on eräs ominaisuuksistamme, jota asiakkaat osaavat arvostaa!"
                ],
                right: '',
                tmk: true
            },
            en: {
                left: [
                    'Sponsor introduction',
                ],
                right: ''
            },
            imgs: [
                {href:'https://www.mittausjakalibrointipalvelu.fi/', src: tmk, alt: 'TMK logo'}
            ]
        },
    ];
</script>
<Banner/>
<Program/>
<Info mask={true} img={infoImg}/>
<Posts posts={data.posts}/>
<Menu/>
<Etiquette/>
<Offers/>
<Sillis/>
<Program title={{fi: 'Yritysesittelyt'}} texts={sponsorIntroduction} id={'sponsor-introduction'} />
<Logofarm />
<Footer/>
