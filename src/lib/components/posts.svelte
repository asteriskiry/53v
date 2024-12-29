<script>
    export let lang = 'fi';
    export let posts;
    export let id = 'news';
    
</script>
<section id="{id}" class="posts">
    <div class="wrap">
        <div class="content padded">
            <div class="divider">
                <div class="bg"></div>
            </div>
                <div class="flex flex-column">
                    <div class="flex-item six has-title">
                        <h2>{lang === 'fi' ? 'Uutiset' : 'The news'}</h2>
                    </div>
                    {#if posts.length}            
                    {#each posts as post}
                    <div class="flex flex-item twelve post">
                        <div class="flex-item three image">
                            <div class="has-image image">
                                <img src="{post._embedded['wp:featuredmedia'][0].source_url}" alt="logo">
                            </div>
                        </div>
                        <div class="flex flex-column flex-item nine">
                            <div class="has-texts">
                                <p class="bold">
                                    {@html post.title.rendered}
                                </p>
                                {@html post.excerpt.rendered}
                            </div>
                            <div class="flex has-meta">
                                <div class="flex-item three">
                                    {new Date(post.date).toLocaleDateString()}
                                </div>
                                <div class="flex-item three">
                                    <a href="{post.link}" target="_blank"> {lang === 'fi' ? 'Lue lisää' : 'Read more'}</a>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    {/each }
                {/if}
                </div>
            <div class="divider"></div>
        </div>
    </div>
</section>
<style lang="scss">
    @use '../../style/variables' as v;

    .divider {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        background-image: url(v.$divider);
        background-repeat: repeat-x;
        background-size: 33.33333%;
        background-position: 50% 50%;
        @include v.md {
            background-size: 50%;
        }
    }
    .twelve {
        background-color: white;
        border-radius: 10px;
    }
    .nine {
        max-width: 800px;
        justify-content: space-around;
        padding: 20px;
        @include v.lg {
            padding: 20px!important;
        }
    }
    .flex-item.three.image {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .has-image {
        clip-path: circle(90px at 50% 50%);
        max-width: 200px;
        img {
            height: 200px;
            width: 200px;
            object-fit: cover;
            object-position: 50% 50%;
        }

        @include v.ml {
            clip-path: circle(70px at 50% 50%);
            max-width: 150px;
            img {
                height: 150px;
                width: 150px;
            }
        }
    }
    .has-meta {
        justify-content: space-between;
        :first-child {
            padding-left: 0;
        }
        :last-child {
            padding-right: 0;
            text-align: end;
        }
        @include v.ml {
            flex-direction: row;
        }
    }
    .post {
        margin: 20px 0;
        &:first-child {
            margin-top: 0;
        }
        &:last-child {
            margin-bottom: 0;
        }
        @include v.ml {
            padding: 40px;
        }
    }
    .has-texts {
        border-bottom: 1px solid v.$background-color-gray;
    }
</style>