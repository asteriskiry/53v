<script>
    import Banner from "$lib/components/banner2.svelte";
    import Info from "$lib/components/info.svelte";
    import Program from "$lib/components/program.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Posts from "$lib/components/posts.svelte";
    import Menu from "$lib/components/menu.svelte";
    import Logofarm from "$lib/components/logofarm.svelte";
    export let data;

</script>
<Banner/>
<Program/>
<Info mask={true}/>
<Posts posts={data.posts}/>
<Menu/>
<Logofarm />
<Footer/>
