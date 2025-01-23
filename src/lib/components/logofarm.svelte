<script>
    import mankeli from "$lib/assets/mankeli_solutions.svg";
    import visma from "$lib/assets/visma.svg";
    import reaktor from "$lib/assets/reaktor.svg";
    import oikia from "$lib/assets/oikia.png";
    import kaalimato from "$lib/assets/kaalimato.webp";
    import ssk from "$lib/assets/SSK.png";
    export let id = 'sponsors';
    export let lang = 'fi';

    export let logos = [
        {
            src: mankeli,
            href: 'https://www.mankelisolutions.fi/',
            alt: 'Mankeli Solutions logo'
        },
        {
            src: visma,
            href: 'https://www.visma.fi/',
            alt: 'Visma logo'
        },
        {
            src: reaktor,
            href: 'https://www.reaktor.com/',
            alt: 'Reaktor logo'
        },
        {
            src: oikia,
            href: 'https://www.oikiaruoka.fi/',
            alt: 'Oikia logo'
        },
        {
            src: kaalimato,
            href: 'https://www.kaalimato.com/',
            alt: 'Kaalimato logo'
        },
        {
            src: ssk,
            href: 'https://sillikonttori.fi/',
            alt: 'Suomen sillikonttori logo'
        },
    ]
</script>

<section id="{id}" class="sponsors">
    <div class="wrap">
        <h2>{lang === 'fi' ? 'Sponsorit' : 'Sponsors'}</h2>
        <div class="flex">
        {#each logos as logo}
            <div class="flex-item four">
                <a rel="noreferrer" href="{logo.href}" target="_blank">
                    <img loading="lazy" class="img" src="{logo.src}" alt="{logo.alt}">
                </a>
            </div>
        {/each}
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
        padding: 5px 10px;
        height: 140px;
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