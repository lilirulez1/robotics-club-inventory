import {json} from "@sveltejs/kit";
import {InventoryStore} from "$lib/inventory-store";

export async function GET() {
	return json(InventoryStore, { status: 200 });
}