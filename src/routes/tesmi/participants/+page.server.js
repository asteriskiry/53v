export const load = async ({fetch, params }) => {
    const api = 'https://api.viiskyt.asteriski.fi/api/participants/'
    const response = await fetch(api);
    
    if (response.ok) {
        const data = await response.json();

        return {
            participants: data,
            api: api
        };
    }

    return {
        participants: [],
        api: api
    };
}