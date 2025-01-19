<script>
    import mankeli from "$lib/assets/mankeli_solutions.svg";
    import visma from "$lib/assets/visma.svg";
    import reaktor from "$lib/assets/reaktor.svg";
    import oikia from "$lib/assets/oikia.png";
    import kaalimato from "$lib/assets/kaalimato.webp";
    export let id = 'sponsors';
    export let lang = 'fi';
</script>

<section id="{id}" class="sponsors">
    <div class="wrap">
        <h2>{lang === 'fi' ? 'Sponsorit' : 'Sponsors'}</h2>
        <div class="flex">
            <div class="flex-item four">
                <a rel="noreferrer" href="https://www.mankelisolutions.fi/" target="_blank">
                    <img class="img" src="{mankeli}" alt="Mankeli Solutions logo">
                </a>
            </div>
            <div class="flex-item four">
                <a rel="noreferrer" href="https://www.visma.fi/" target="_blank">
                    <img class="img" src="{visma}" alt="Visma logo">
                </a>
            </div>
            <div class="flex-item four">
                <a rel="noreferrer" href="https://www.reaktor.com/" target="_blank">
                    <img class="img" src="{reaktor}" alt="Reaktor logo">
                </a>
            </div>
            <div class="flex-item four">
                <a rel="noreferrer" href="https://www.oikiaruoka.fi/" target="_blank">
                    <img class="img" src="{oikia}" alt="Oikia logo">
                </a>
            </div>
            <div class="flex-item four">
                <a rel="noreferrer" href="https://www.kaalimato.com/" target="_blank">
                    <img class="img" src="{kaalimato}" alt="Kaalimato logo">
                </a>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '../../style/variables' as v;
    section.sponsors {
        background-color: v.$background-color-light-gray;
        padding-bottom: calc(1em + 10px);
    }
    .flex {
        flex-wrap: wrap;
        justify-content: center;
    }
    a {
        padding: 1rem;
        height: 120px;
        display: flex;
        img {
            object-fit: contain;
            width: 100%;
            filter: grayscale(1);
            -webkit-filter: grayscale(1);
            &:hover {
                filter: grayscale(0);
                transform: scale(1.1);
                -webkit-filter: grayscale(0);
            }
        }
        
    }

    @include v.ml {
        .flex-item.four {
            width: 50%;
        } 
    }
    @include v.sm {
        .flex-item.four {
            width: 100%;
        }
        a {
            img {
                filter: unset;
                -webkit-filter: unset;
                &:hover {
                    filter: unset;
                    transform: unset;
                    -webkit-filter: unset;
                }
            }
        }
    } 
    
</style>