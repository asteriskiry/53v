import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
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

        if (response.ok) {
            return { 
                success: true,
            };
        }
        if (res?.non_field_errors[0] === 'Ilmoittautuminen ei ole auki') {
            return fail(400, { 
                success: false,
                ilmo: false
            });
        }
		return fail(400, { 
            success: false
        });
	},
};