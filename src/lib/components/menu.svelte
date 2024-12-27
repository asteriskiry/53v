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
                    <p><b>Maa-artisokkakeitto</b> <br> yrttiöljyä, saaristolaisleipää, valkosipulilevite</p>
                {:else}
                    <h4>Alkuruoka</h4>
                    <p><b>Maa-artisokkakeitto</b> <br> yrttiöljyä, saaristolaisleipää, valkosipulilevite</p>
                {/if}
                </div>
            </div>
            <div class="flex flex-item twelve menu-item">
                <div class="flex flex-column flex-item six center">
                {#if lang === 'fi'}
                    <h4>Pääruoka</h4>
                    <h5>Liha</h5>
                    <p><b>Ylikypsää naudan rintaa ja punaviinikastiketta</b> <br> paahdetut pikkuperunat, uunijuurekset, pikkelöidyt sinapinsiemenet, kasvissipsit</p>
            
                    <h5>Kala</h5>
                    <p><b>Veriappelsiinilohta ja sitruskastiketta</b> <br> paahdetut pikkuperunat, uunijuurekset, pikkelöidyt sinapinsiemenet, kasvissipsit</p>

                    <h5>Vegaani</h5>
                    <p><b>Melanzane</b> <br> maalaisleipää, uunijuurekset, pikkelöidyt sinapinsiemenet, kasvissipsit</p>
                {:else}
                    <h4>Alkuruoka</h4>
                    <p><b>Maa-artisokkakeitto</b> <br> yrttiöljyä, saaristolaisleipää, valkosipulilevite</p>
                {/if}
                </div>
            </div>
            <div class="flex flex-item twelve menu-item">
                <div class="flex flex-column flex-item six center">
                {#if lang === 'fi'}
                    <h4>Jälkiruoka</h4>
                    <p><b>Ananas-passionsuklaakakkua</b> <br> kahvi/tee</p>
                {:else}
                    <h4>Alkuruoka</h4>
                    <p><b>Maa-artisokkakeitto</b> <br> yrttiöljyä, saaristolaisleipää, valkosipulilevite</p>
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