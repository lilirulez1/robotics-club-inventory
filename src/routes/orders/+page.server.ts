export const actions = {
	add_order: async ({ request, fetch }) => {
		const form_data = await request.formData();

		const data: { [key: string]: any } = {};
		form_data.forEach((value, key) => data[key] = value);

		const response = await fetch("/api/orders/new", {
			method: 'POST',
			body: JSON.stringify(data),
		});

		return {};
	}
};