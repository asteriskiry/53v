<script>
    import Ilmoformi from "$lib/components/ilmoformi.svelte";
    export let id = 'ilmo';
    export let form;
    export let invited = false
    export let lang = 'fi';
    export let data;
</script>

<Ilmoformi {invited} {id} {form} fi={lang === 'fi'} {data}/>
