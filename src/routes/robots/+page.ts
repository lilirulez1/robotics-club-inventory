export async function load(event) {
	const response = await event.fetch("api/robots/list");
	const table_data = await response.json();
	return { table_data };
}