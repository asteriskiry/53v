export const actions = {
	invited: async ({ request }) => {
		const data = await request.formData();

        let body = {};
        data.forEach((value, key) => body[key] = value);
        body = JSON.stringify(body);

        const response = await fetch(import.meta.env.VITE_PUBLIC_API_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body
        })

        const res = await response.json();
        
		return { 
            success: true,
        };
	},
	guest: async (event) => {
		// TODO
	}
};