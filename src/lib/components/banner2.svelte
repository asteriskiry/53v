<script>
    import logo from "$lib/assets/vuju_logo.png";
    export let lang = 'fi';
    export let links = [
        { text: "Ohjelma", href: "#program" },
        { text: "Tietoa", href: "#info" },
        { text: "Sillis", href: "#sillis" },
        { text: "Uutiset", href: "#news" },
        { text: "Menu", href: "#menu" },
        { text: "Sponsorit", href: "#sponsors" },
        { text: "Ilmo", href: "tesmi/ilmo" },
        { text: "Etiketti", href: "#etiquette" },
        { text: "Tarjoukset", href: "#offers" },
    ];
    let x = 0;
    let menuOpen = false;
    function menuToggle() {
		menuOpen = !menuOpen
        if (menuOpen) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}

    function closeMenu(event) {
        if (!event.target.closest('.menu') && !event.target.closest('.menu-toggle')) {
            menuOpen = false;
            document.body.classList.remove("overflow-y-hidden");
        }
    }

</script>

<svelte:window bind:outerWidth={x} on:click={closeMenu}></svelte:window>

<section id="banner">
    <div class="top"></div>
    <div class="flowers left"></div>
    <div class="corner left"></div>
    <div class="flowers right"></div>
    <div class="corner right"></div>
    <div class="wrap">
        <div class="banner">
            <div class="logo">
                <img src="{logo}" alt="Vuosijuhlaloho">
            </div>
            <div class="nav-links">
                {#each links as link}
                    <a href={link.href}>{link.text}</a>
                {/each}
            </div>
        </div>
    </div>
{#if x < 1001}
    <div class="mobile-nav">
        <div class="menu-toggle" class:menuOpen on:click={menuToggle} on:keydown={(e) => {e.code ==="Enter" ? menuOpen = !menuOpen : '' }} role="button" tabindex="0">
			<div>
				<div class="con">
					<div class="bar up"></div>
					<div class="bar middle"></div>
					<div class="bar bottom"></div>
				</div>
			</div>
		</div>
		<div class="nav" class:menuOpen>
			<nav class:menuOpen>
				<ul>
					{#each links as link}
						<li><a href={link.href}>{link.text}</a></li>
					{/each}
				</ul>
			</nav>
		</div>
    </div>
{/if}
</section>
<style lang="scss">
    @use '../../style/variables' as v;
    #banner {
        padding: 100px 0;
        background: linear-gradient(0deg, v.$background-color, v.$background-color2 80%) no-repeat;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }
    .wrap {
        display: flex;
        height: calc(100vh - 100px);
    }
    .banner {
        position: relative;
        width: 100%;
        margin: 50px auto;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    .top {
        position: absolute;
        top: 0;
        height: 250px;
        width: 100%;
        background: url(v.$chain2) 50% -10px;
        background-size: contain;
        background-repeat: repeat-x;
        z-index: 3;
    }
  
    
    .flowers {
        background: url(v.$chain3);
        background-size: contain;
        width: 150px;
        height: 100vh;
        position: absolute;
        top: 0;
        z-index: 2;
        &.left {
            left: 0;
            transform: rotate(180deg);
        }
        &.right {
            right: 0;
        }
    }

    .corner {
        position: absolute;
        background: url(v.$chain2) 50%;
        background-size: contain;
        width: 45%;
        height: 150px;
        background-repeat: repeat-x;
        bottom: -50px;

        &.left {
            transform: rotate(190deg);
        }
        &.right {
            right: 0%;
            transform: rotate(-190deg);
        }
    }

    .logo {
        img {
            width: 100%;
        }
    }
    .nav-links {
        position: absolute;
        width: 100%;
        height: 100%;
    }
  
    .nav-links a {
        font-family: "Meow Script", cursive;
        font-size: v.$font-size-heading2;
        color: white;
        font-weight: 400;
        text-shadow: 2px 2px 1px black;
        -webkit-text-stroke: 0.5px black;
        letter-spacing: 3px;
        position: absolute;
        text-decoration: none;
        transform: translate(-50%, -50%);
        &:hover {
            transform: translate(-50%, -50%) scale(1.1);
        }
    }
  
    /* Position links in a circle */
    .nav-links a:nth-child(1) { top: 22%; left: 38%; }
    .nav-links a:nth-child(2) { top: 22%; left: 62%; }
    .nav-links a:nth-child(3) { top: 44%; left: 72%; }
    .nav-links a:nth-child(4) { top: 65%; left: 75%; }
    .nav-links a:nth-child(5) { top: 86%; left: 69%; }
    .nav-links a:nth-child(6) { top: 100%; left: 50%; }
    .nav-links a:nth-child(7) { top: 86%; left: 31%; }
    .nav-links a:nth-child(8) { top: 65%; left: 23%; }
    .nav-links a:nth-child(9) { top: 44%; left: 23%; }

    .mobile-nav {
		.nav {
			display: none;
			height: 70px;
			&.menuOpen {
				display: block;
			}
			nav {
				&.menuOpen {
					display: flex;
					flex-direction: column;
					width: 50%;
					position: fixed;
					top: 0;
					right: 0;
					height: 100vh;
					z-index: 1000;
                    background: linear-gradient(-90deg, v.$background-color, v.$background-color2 200%) no-repeat;
					ul {
						padding-top: 70px;
						display: flex;
						flex-direction: column;
						list-style: none;
						text-align: right;
                        margin: auto 0;
                        margin-right: 10px;
						li {
							font-size: 24px;
							margin: 15px;
						}
					}
				}
			}
		}
		.menu-toggle {
			display: flex;
			position: absolute;
			top: 50px;
			right: 50px;
			height: 60px;
			align-items: center;
			background-color: v.$riski-green-light;
			border-radius: 50%;
			z-index: 2000;
            box-shadow: 2px 2px 20px 2px black;
			>div {
				width: 60px;
			}
			.con {
				width: auto;
				margin: 0 auto;
				.bar {
					display: block;
					height: 3px;
					width: 28px;
					margin: 5px auto;
					border-radius: 2px;
					background-color: v.$riski-yellow;;
					transition: all 0.15s ease;
				}
			}
			&.menuOpen {
				.con {
					.bar {
						&.up {
							transform: translateY(4px) rotateZ(45deg);
						}
						&.middle {
							display: none;
						}
						&.bottom {
							transform: translateY(-4px) rotateZ(-45deg);
						}
					}
				}
			}
		}
	}

    @include v.xl {
        .nav-links a:nth-child(1) { top: 22%; left: 35%; }
        .nav-links a:nth-child(2) { top: 22%; left: 65%; }
        .nav-links a:nth-child(3) { top: 44%; left: 80%; }
        .nav-links a:nth-child(4) { top: 65%; left: 84%; }
        .nav-links a:nth-child(5) { top: 86%; left: 75%; }
        .nav-links a:nth-child(6) { top: 100%; left: 50%; }
        .nav-links a:nth-child(7) { top: 86%; left: 25%; }
        .nav-links a:nth-child(8) { top: 65%; left: 16%; }
        .nav-links a:nth-child(9) { top: 44%; left: 16%; }
    }
    
    @include v.lg {
        .nav-links a:nth-child(1) { top: 22%; left: 30%; }
        .nav-links a:nth-child(2) { top: 22%; left: 65%; }
        .nav-links a:nth-child(3) { top: 44%; left: 85%; }
        .nav-links a:nth-child(4) { top: 65%; left: 92%; }
        .nav-links a:nth-child(5) { top: 86%; left: 80%; }
        .nav-links a:nth-child(6) { top: 100%; left: 50%; }
        .nav-links a:nth-child(7) { top: 86%; left: 20%; }
        .nav-links a:nth-child(8) { top: 65%; left: 10%; }
        .nav-links a:nth-child(9) { top: 44%; left: 10%; }
    }

    @include v.ml {
        .nav-links {
            display: none;
        }

        .banner {
            position: relative;
            width: 100%;
            margin: 50px auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @include v.md {
        .flowers {
            width: 100px;
        }
    }

    @include v.sm {
        .flowers {
            display: none;
        }
        .top {
            height: 200px;
        }
        #banner {
            padding: 50px 0;
        }
    }
  </style>
  