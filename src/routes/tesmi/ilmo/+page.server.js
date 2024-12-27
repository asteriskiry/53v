export const actions = {
	invited: async ({ request }) => {
		const data = await request.formData();

        let body = {};
        data.forEach((value, key) => body[key] = value);
        body = JSON.stringify(body);

        const response = await fetch('https://api.viiskyt.asteriski.fi/api/participants/', {
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