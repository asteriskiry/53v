<script>
    export let lang = 'fi';
</script>
<div class="scroller">
    <a href="{lang === 'fi' ? '/tesmi' : '/tesmi/en'}">></a>
</div>
<div class="footer wrap">
    <div class="flex">
        <div class="flex-item six middle">
            <a href="https://www.asteriski.fi" target="_blank">© Copyright {new Date().getFullYear()} Asteriski ry</a>
        </div>
    </div>
</div>


<style lang="scss">
    @use '../../style/variables' as v;
    .footer {
        .flex {
            height: v.$footer_height;
            display: flex;
            justify-content: center;
            align-items: center;
            .middle {
                text-align: center;
            }
        }
    }
    .scroller {
        position: fixed;
        bottom: 50px;
        right: 50px;
        background-color: v.$riski-green-light;
        color: v.$riski-yellow;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-left: auto;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(-90deg);
        a {
            color: v.$riski-yellow;
            text-decoration: none;
            font-size: 30px;
            text-align: center;
            width: 100%;
            transition: all 0.2s ease-in-out;
            &:hover {
                transform: scale(1.2); 
            }
        }
    }
</style>