export const load = async ({fetch, params }) => {
    /* const response = await fetch('https://www.asteriski.fi/wp-json/wp/v2/posts?tags=2200&_embed&per_page=4');

    if (response.ok) {
        const data = await response.json();

        return {
            posts: data
        };
    } */

    return {
        posts: []
    };
}