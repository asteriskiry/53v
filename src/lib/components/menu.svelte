<script>
    export let lang = 'fi';
    export let id = 'menu';
</script>

<section id="{id}" class="menu">
    <div class="wrap">
        <div class="flex flex-column center bordered flower-bg">
            <h2>Menu</h2>
            <div class="flex flex-item twelve menu-item">
                <div class="flex flex-column flex-item six center">
                {#if lang === 'fi'}
                    <h4>Alkuruoka</h4>
                    <h5>Liha</h5>
                    <p><b>Jääkellarin lohta</b> <br> marinoitua perunaa, siianmätiä, ja "hovimestarin majoneesia" (L,G)</p>

                    <h5>Kasvis</h5>
                    <p><b>Paahdettuja punajuuria</b> <br> vuohenjuustomoussea, vadelma-punajuuripyrettä ja maa-artisokkaa (L,G)</p>
                {:else}
                    <h4>Starter</h4>
                    <h5>Meat</h5>
                    <p><b>Ice cellar salmon</b> <br> marinated potatoes, whitefish roe, and "butler's mayonnaise" (L,G)</p>

                    <h5>Vegetarian</h5>
                    <p><b>Roasted beets</b> <br> goat cheese mousse, raspberry-beetroot puree and Jerusalem artichoke (L,G)</p>
                {/if}
                </div>
            </div>
            <div class="flex flex-item twelve menu-item">
                <div class="flex flex-column flex-item six center">
                {#if lang === 'fi'}
                    <h4>Pääruoka</h4>
                    <h5>Liha</h5>
                    <p><b>Ylikypsää karitsan entrecotea</b> <br> selleripyrettä, perunafondattia, pikkelöityä siitaketta ja tummaa rosmariinikastiketta (L,G)</p>

                    <h5>Kasvis</h5>
                    <p><b>Vihreä Thaicurry</b> <br> bataattia, edamamepapuja, luomu tofua ja friteerattua riisiä (V,G)</p>
                {:else}
                    <h4>Main Course</h4>
                    <h5>Meat</h5>
                    <p><b>Overcooked lamb entrecote</b> <br> celery puree, potato fondant, pickled shiitake mushrooms and dark rosemary sauce (L,G)</p>

                    <h5>Vegetarian</h5>
                    <p><b>Green Thai curry</b> <br> sweet potato, edamame beans, organic tofu and fried rice (V,G)</p>
                {/if}
                </div>
            </div>
            <div class="flex flex-item twelve menu-item">
                <div class="flex flex-column flex-item six center">
                {#if lang === 'fi'}
                    <h4>Jälkiruoka</h4>
                    <p><b>Tuulihattu</b> <br> suolakinuskia, omenaa, kaneli-crumblea ja mascarponemoussea (L)</p>
                {:else}
                    <h4>Dessert</h4>
                    <p><b>Cream puff</b> <br> salted caramel, apple, cinnamon crumble and mascarpone mousse (L)</p>
                {/if}
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '../../style/variables' as v;
    section.menu {
        text-align: center;
        h5 {
            font-size: 18px;
            margin: 0;
        }
        h4 {
            margin-top: 2.66em;
        }
    }
    .menu-item {
        justify-content: center;
        margin: 10px 0;
        position: relative;
        
        &:after {
            content: "";
            width: 50%;
            background-color: v.$background-color-light-gray;
            height: 1px;
            position: absolute;
            bottom: 0%;
        }
        &:last-of-type {
            &:after {
                display: none;
            }
        }
    }
    .center {
        align-items: center;
        p {
            margin-top: 0;
            margin-bottom: 40px;
        }
    }
    
    @include v.md {
        .flex-item {
            width: 100%;
            padding: 0 10px;
        }
    }
</style>