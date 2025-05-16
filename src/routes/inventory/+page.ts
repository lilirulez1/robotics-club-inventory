export async function load({ fetch }) {
	const response = await fetch("api/inventory/list");
	const table_data = await response.json();
	return { table_data };
}