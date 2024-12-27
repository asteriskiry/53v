export const load = async ({fetch, params }) => {
    /* const response = await fetch(import.meta.env.VITE_PUBLIC_API_URL);

    if (response.ok) {
        const data = await response.json();

        return {
            participants: data
        };
    } */

    return {
        participants: [],
        api: import.meta.env.VITE_PUBLIC_API_URL
    };
}