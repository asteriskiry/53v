<script>
    import Banner from "$lib/components/banner2.svelte";
    import Info from "$lib/components/info.svelte";
    import Program from "$lib/components/program.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Posts from "$lib/components/posts.svelte";
    import Menu from "$lib/components/menu.svelte";
    import Sillis from "$lib/components/sillis.svelte";
    import Logofarm from "$lib/components/logofarm.svelte";
    import Etiquette from "$lib/components/etiquette.svelte";
    import infoImg from "$lib/assets/vuju.jpg"
    export let data;

    const links = [
        { text: "Program", href: "#program" },
        { text: "About", href: "#info" },
        { text: "News", href: "#news" },
        { text: "Menu", href: "#menu" },
        { text: "Sillis", href: "#sillis" },
        { text: "Sign up", href: "en/ilmo" },
        { text: "Etiquette", href: "#etiquette" },
        { text: "Sponsors", href: "#sponsors" },
    ];

    const lang = 'en';
</script>
<Banner {lang} {links}/>

<Info {lang} mask={true} img={infoImg}/>
<Posts {lang} posts={data.posts}/>
<Menu {lang}/>
<Etiquette {lang}/>
<Sillis {lang}/>
<Logofarm {lang}/>
<Footer {lang}/>
