<script>
    import Ilmoformi from "$lib/components/ilmoformi.svelte";
    export let id = 'ilmo';
    export let form;
    export let invited = false
</script>

<Ilmoformi {invited} {id} {form} />
