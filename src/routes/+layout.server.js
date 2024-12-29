export const load = async ({fetch}) => { 
    
    let posts = [];
    let participants = [];

    const response = await fetch('https://www.asteriski.fi/wp-json/wp/v2/posts?tags=2200&_embed&per_page=4', {
        method: 'GET'
    });

    if (response.ok) {
        posts = await response.json();
    }

    const api = 'https://api.viiskyt.asteriski.fi/api/participants/'
    const apiResponse = await fetch(api);
    
    if (apiResponse.ok) {
        participants = await apiResponse.json();
    }

    return {
        posts,
        participants
    };
}