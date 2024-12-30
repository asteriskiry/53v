import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

        let body = {};
        let error = false;

        if (!data.has('is_consenting') || !data.has('is_asteriski_member') || !data.has('is_alcohol_free') || !data.has('menu') || !data.has('is_attending_sillis') || !data.has('show_name')) {
            return fail(400, {
                success: false,
                fields: true
            })
        }
        
        if (data.get('is_greeting') === 'yes' && data.get('party_representing') === '') {
            return fail(400, {
                success: false,
                fields: true
            })
        }

        const starting_year = parseInt(data.get('starting_year'));
        if (starting_year < 1950 || starting_year > 2025) {
            return fail(400, {
                success: false,
                fields: true
            })
        }

        data.forEach((value, key) => {
            if (['first_name', 'last_name', 'email'].includes(key) && value === '') {
                error = true
            }
            if (key === 'starting_year' && value === '') {
                return;
            }
            body[key] = value;
        });
        
        if (error) {
            return fail(400, {
                success: false,
                fields: true
            })
        }

        body = JSON.stringify(body);

        const response = await fetch('https://api.viiskyt.asteriski.fi/api/participants/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body
        })

        const res = await response.json();

        if (response.ok) {
            const apiResponse = await fetch('https://api.viiskyt.asteriski.fi/api/participants/');
            let participants = [];
            if (apiResponse.ok) {
                participants = await apiResponse.json();
                return { 
                    success: true,
                    participants
                };
            } else {
                return {
                    success: true
                }
            }
        }
        if (res?.non_field_errors && Array.isArray(res.non_field_errors) && res?.non_field_errors[0] === 'Ilmoittautuminen ei ole auki') {
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