<script>
    import Ilmo from "$lib/components/ilmo.svelte";
    import Footer from "$lib/components/footer.svelte";
    export let form;
    export let data
</script>

<Ilmo {form} invited={true} {data}/>
<Footer />