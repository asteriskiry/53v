<script>
    import Ilmo from "$lib/components/ilmo.svelte";
    import Footer from "$lib/components/footer.svelte";
    export let form;
    export let data
    const lang = 'en';
</script>

<Ilmo {form} {lang} {data}/>
<Footer />