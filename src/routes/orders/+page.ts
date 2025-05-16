export async function load({ fetch }) {
	const response = await fetch("api/orders/list");
	const table_data = await response.json();
	return { table_data };
}