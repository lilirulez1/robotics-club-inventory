export const actions = {
	add_item: async ({ request, fetch }) => {
		const form_data = await request.formData();

		const data: { [key: string]: any } = {};
		form_data.forEach((value, key) => data[key] = value);

		const response = await fetch("/api/inventory/new", {
			method: 'POST',
			body: JSON.stringify(data),
		});

		return {};
	}
};