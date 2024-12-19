import { error } from '@sveltejs/kit';
export const load = async ({fetch, url }) => {
    
    
    const response = await fetch('https://www.asteriski.fi/wp-json/wp/v2/posts?tags=2200&_embed&per_page=4', {
        method: "GET",
        headers: {
            origin: url.origin
        }
    });

    if (response.ok) {
        const data = await response.json();

        return {
            posts: data
        };
    } else {
        const data = await response.json();
        error (500, {
            message: data
        });
    }

    return {
        posts: []
    };
    
}