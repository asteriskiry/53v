<script>
    import { enhance } from '$app/forms';
    import { page } from '$app/stores';
    export let invited = false;
    export let id = 'ilmo';
    export let form;
    let fi = true;
    let is_greeting = 'yes';

</script>
<section id="{id}">
<div class="wrap">
    <div class="flex-items bordered flower-bg">
        <h2>Ilmoittautuminen</h2>
        {#if form?.error}
            {console.log(form?.error)}
        {/if}
        {#if form?.success !== true}
        <form method="POST" use:enhance>
            <div class="flex-item twelve row">
                <a href=".">Etusivulle</a>
                <a href="/tesmi/participants">Ilmoittautuneet</a>
            </div>
            <div class="flex-item six">
                <label>
                    <span>{fi ? 'Etunimi' : 'First name'}*</span>
                    <input type="text" name="first_name" required>
                </label>
            </div>
            <div class="flex-item six">
                <label>
                    <span>{fi ? 'Sukunimi' : 'Last name'}*</span>
                    <input type="text" name="last_name" required>
                </label>
            </div>
            <div class="flex-item six">
                <label>
                    <span>{fi ? 'Sähköposti' : 'Email'}*</span>
                    <input type="email" name="email" required>
                </label>
            </div>
            <div class="flex-item six">
                <span>{fi ? 'Asteriskin jäsen' : 'Asteriski member'}*</span>
                <div class="options">
                    <label>
                        <input type="radio" name="is_asteriski_member" value="yes" required checked>
                        <span>{fi ? 'Kyllä' : 'Yes'}</span>
                    </label>
                    <label>
                        <input type="radio" name="is_asteriski_member" value="no">
                        <span>{fi ? 'Ei' : 'No'}</span>
                    </label>
                </div>
            </div>
            <div class="flex-item six">
                <span>{fi ? 'Juoma' : 'Drink'}*</span>
                <div class="options">
                    <label>
                        <input type="radio" name="is_alcohol_free" value="no" required checked>
                        <span>{fi ? 'Alkoholillinen' : 'Alcohol'}</span>
                    </label>
                    <label>
                        <input type="radio" name="is_alcohol_free" value="yes">
                        <span>{fi ? 'Alkoholiton' : 'Alcohol free'}</span>
                    </label>
                </div>
            </div>
            <div class="flex-item six">
                <span>{fi ? 'Menu' : 'Menu'}*</span>
                <div class="options">
                    <label>
                        <input type="radio" name="menu" value="LI" required checked>
                        <span>{fi ? 'Liha' : 'Meat'}</span>
                    </label>
                    <label>
                        <input type="radio" name="menu" value="VG">
                        <span>{fi ? 'Vegaani' : 'Vegan'}</span>
                    </label>
                    <label>
                        <input type="radio" name="menu" value="KA">
                        <span>{fi ? 'Kala' : 'Fish'}</span>
                    </label>
                </div>
            </div>
            <div class="flex-item six">
                <label>
                    <span>{fi ? 'Erikoisruokavaliot ja allergiat' : 'Special diets and allergies'}</span>
                    <textarea name="excretory_diets"></textarea>
                </label>
            </div>
            <div class="flex-item six">
                <span>{fi ? 'Osallistutko silliaamiaiselle?' : 'Are you attending to herring breakfast?'}*</span>
                <div class="options">
                    <label>
                        <input type="radio" name="is_attending_sillis" value="yes" required checked>
                        <span>{fi ? 'Kyllä' : 'Yes'}</span>
                    </label>
                    <label>
                        <input type="radio" name="is_attending_sillis" value="no">
                        <span>{fi ? 'Ei' : 'No'}</span>
                    </label>
                </div>
            </div>
            <div class="flex-item six">
                <label>
                    <span>{fi ? 'Avecin nimi (HUOM! Avecing on ilmoittauduttava erikseen)' : '(NOTE! Avecs need to register separately)'}</span>
                    <input type="text" name="avecs_name">
                </label>
            </div>
            <div class="flex-item six">
                <label>
                    <span>{fi ? 'Pöytäseuruetoiveet ja muut terveiset' : 'Table party wishes and other greetings'}</span>
                    <textarea name="other_info"></textarea>
                </label>
            </div>
            <div class="flex-item six">
                <span>{fi ? 'Nimeni saa näkyä ilmoittautuneuiden listassa' : 'My name can be shown in the list of those who registered'}*</span>
                <div class="options">
                    <label>
                        <input type="radio" name="show_name" value="yes" required checked>
                        <span>{fi ? 'Kyllä' : 'Yes'}</span>
                    </label>
                    <label>
                        <input type="radio" name="show_name" value="no">
                        <span>{fi ? 'Ei' : 'No'}</span>
                    </label>
                </div>
            </div>
    {#if invited}
            <div class="flex-item six">
                <span>{fi ? 'Esitän tervehdyksen' : 'I want to offer my greetings'}*</span>
                <div class="options">
                    <label>
                        <input type="radio" name="is_greeting" value="yes" bind:group={is_greeting} required checked>
                        <span>{fi ? 'Kyllä' : 'Yes'}</span>
                    </label>
                    <label>
                        <input type="radio" name="is_greeting" value="no"  bind:group={is_greeting}>
                        <span>{fi ? 'Ei' : 'No'}</span>
                    </label>
                </div>
            </div>
        {#if is_greeting === 'yes'}
            <div class="flex-item six">
                <label>
                    <span>{fi ? 'Tervehdyksessä edustamasi taho(t)' : 'The entity you represent when greeting'}*</span>
                    <input type="text" name="party_representing" required>
                </label>
            </div>
        {/if}
    {/if}
        <div class="flex-item six">
            <label class="flex-row">
                <input type="checkbox" name="is_consenting" required>
                <span>{fi 
                    ? 'Hyväksyn, että tietojani käytetään vuosijuhlien järjestämiseen. Tiedot poistetaan vuosijuhlien jälkeen.'
                    : 'I consent that the data entered is used to organize the 50th anniversary event. Data is removed after the event.'}*
                </span>
            </label>
        </div>
        <div class="flex-item six row">
        {#if form?.success === false}
            {#if form?.ilmo === false}
            <p class="bold">{fi
                ?'Ilmoittautuminen ei ole auki!'
                : 'Registration is not open!'}
            </p>
            {:else}
            <p class="bold">{fi
                ?'Jotain meni pieleen. Yritä hetken kuluttua uudelleen.'
                : 'Something went wrong. Please try again later.'}
            </p>
            {/if}
        {/if}
            <button type="submit">{fi ? 'Lähetä' : 'Send'}</button>
        </div>
        </form>
        {:else}
        <div class="flex-item six thanks">
            <h3>{fi
                ? 'Kiitos ilmoittautumisesta!'
                : 'Thanks!'}
            </h3>
            <a href="/tesmi/ilmo">{fi ? 'Tee toinen ilmoittautuminen' : 'Register again'}</a>
            <a href="/tesmi/participants">{fi ? 'Katso ilmoittautuneet' : 'See registered'}</a>
            <a href=".">{fi ? 'Etusivulle' : 'To frontpage'}</a>
        </div>
        
        {/if}
    </div>
</div>
</section>
<style lang="scss">
    @use '../../style/variables' as v;
    .flex-items {
        
        form {
            width: 50%;
            margin: 0 auto;
            @include v.lg {
                width: 80%;
            }
            @include v.ml {
                width: 100%;
            }
        }
    
        .flex-item {
            display: flex;
            flex-direction: column;
            margin: 10px 0;
            padding: 5px;
            >label {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
            }
            .flex-row {
                flex-direction: row;
                align-items: center;
                font-size: 12px;
            }
            span {
                filter: drop-shadow(0 1mm 5mm #000);
                vertical-align: bottom;
                cursor: pointer;
            }
            &.row {
                flex-direction: row;
                a:first-of-type {
                    margin-right: auto;
                }
                a:last-of-type {
                    margin-left: auto;
                }
            }
        }
    }

    input, textarea {
        border: 2px solid v.$font-gold;
    }
    input {
        height: 36px;
    }

    input[type="radio"] {
        margin-top: 0;
        width: 1.3em;
        height: 1.3em;
        background-color: white;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid v.$background-color-light-gray;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
    }

    input[type="radio"]:checked {
        background-color: v.$font-gold;
    }
    input[type="checkbox"] {
        margin-right: 15px;
    }
    
    h2 {
        text-align: center;
    }

    .options {
        >label {
            margin-right: 50px;
            &:last-of-type {
                margin-right: 0;
            }
        }
        @include v.md {
            display: flex;
            flex-direction: column;
            >label {
                margin-right: 0px;
                margin-bottom: 10px;
            }
        }
    }
    .thanks {
        align-items: center;
        a {
            margin: 5px 0;
        }
    }
</style>