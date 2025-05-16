import type {InventoryItem} from "$lib/constants";
import {InventoryStore} from "$lib/inventory-store";

export async function POST({ request }) {
	const new_item: InventoryItem = await request.json();

	InventoryStore.push(new_item);

	return new Response(JSON.stringify({ success: true }), {
		headers: { 'Content-Type': 'application/json' },
	});
}