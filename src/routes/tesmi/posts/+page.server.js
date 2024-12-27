export const load = async ({fetch, url }) => { 
    
    /* const response = await fetch('https://www.asteriski.fi/wp-json/wp/v2/posts?tags=2200&_embed&per_page=4', {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();
        console.log(response)
        return {
            posts: data
        };
    } */

    return {
        posts: []
    };
}