export const actions = {
	invited: async ({ request }) => {
		const data = await request.formData();

        let body = {};
        data.forEach((value, key) => body[key] = value);
        body = JSON.stringify(body);

        const response = await fetch('http://127.0.0.1:8000/api/participants/', {
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